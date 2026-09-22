import { NextResponse } from "next/server";
import { sendSlackMessage } from "@/app/actions/slack";

export async function GET(request, context) {
  const params = await context.params;
  const rawId = params?.id || "";
  const cleanId = rawId.trim();

  const userAgent = request.headers.get("user-agent") || "";
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  // Filter out automated scrapers / bot link previews
  const isBot = /bot|spider|crawl|slurp|facebookexternalhit|whatsapp|preview|twitterbot|linkedinbot/i.test(
    userAgent
  );

  const ukTimeString = new Date().toLocaleString("en-GB", {
    timeZone: "Europe/London",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const webhookUrl =
    process.env.GOOGLE_SHEET_CAMPAIGN_WEBHOOK_URL ||
    "https://script.google.com/macros/s/AKfycbwU9D2pwFlegZ3BKgSs03SgyuwNaPaPXgkMd1BJAxCkAhcP3jIRRIKdglr7zDlDeU6h3w/exec";

  let sheetData = null;

  // 1. Notify Google Sheet Webhook and verify prospect
  if (webhookUrl && !isBot && cleanId) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: cleanId,
          timestamp: ukTimeString,
          userAgent,
          ip,
        }),
        signal: AbortSignal.timeout(6000),
      });

      if (response.ok) {
        sheetData = await response.json().catch(() => null);
      }
    } catch (err) {
      console.error("Google Sheet webhook error:", err);
    }
  }

  // 2. Notify Slack channel ONLY if valid campaign prospect was verified in sheet
  if (!isBot && cleanId && sheetData?.status === "success") {
    try {
      const company = sheetData.company || "Unknown Company";
      const contact = sheetData.name || "Unknown Contact";
      const count = sheetData.count || 1;

      const fields = [
        {
          type: "mrkdwn",
          text: `*Company:*\n${company}`,
        },
        {
          type: "mrkdwn",
          text: `*Contact:*\n${contact}`,
        },
        {
          type: "mrkdwn",
          text: `*Campaign ID:*\n\`${cleanId}\``,
        },
        {
          type: "mrkdwn",
          text: `*Time (UK):*\n${ukTimeString}`,
        },
      ];

      if (count > 1) {
        fields.push({
          type: "mrkdwn",
          text: `*Visits:*\n${count}x`,
        });
      }

      await sendSlackMessage([
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "📬 Print Campaign Link Opened!",
            emoji: true,
          },
        },
        {
          type: "section",
          fields,
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: `📍 *Source:* Royal Mail Print Campaign | Device: ${
                userAgent.includes("Mobile") ? "📱 Mobile" : "💻 Desktop"
              }${count > 1 ? ` | 🔄 Repeat Visitor (${count}th time)` : ""}`,
            },
          ],
        },
      ]);
    } catch (slackErr) {
      console.error("Failed to send Slack alert:", slackErr);
    }
  } else if (!isBot && cleanId && sheetData?.status === "not_found") {
    console.warn(`[Print Campaign] Ignored scan for unknown campaign ID: "${cleanId}"`);
  }

  // 3. Redirect to live calculator with attribution
  const destination = new URL("/workforce-cost-calculator", request.url);
  destination.searchParams.set("utm_source", "print");
  destination.searchParams.set("utm_medium", "direct_mail");
  destination.searchParams.set("utm_campaign", "wi2_print_campaign");
  destination.searchParams.set("cid", cleanId);

  return NextResponse.redirect(destination, 307);
}
