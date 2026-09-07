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

  // 1. Notify Google Sheet Webhook
  if (webhookUrl && !isBot && cleanId) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: cleanId,
          timestamp: ukTimeString,
          userAgent,
          ip,
        }),
      });
    } catch (err) {
      console.error("Google Sheet webhook error:", err);
    }
  }

  // 2. Notify Slack channel
  if (!isBot && cleanId) {
    try {
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
          fields: [
            {
              type: "mrkdwn",
              text: `*Campaign ID:*\n\`${cleanId}\``,
            },
            {
              type: "mrkdwn",
              text: `*Time (UK):*\n${ukTimeString}`,
            },
          ],
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: `📍 *Source:* Royal Mail Print Campaign | Device: ${
                userAgent.includes("Mobile") ? "📱 Mobile" : "💻 Desktop"
              }`,
            },
          ],
        },
      ]);
    } catch (slackErr) {
      console.error("Failed to send Slack alert:", slackErr);
    }
  }

  // 3. Redirect to live calculator with attribution
  const destination = new URL("/workforce-cost-calculator", request.url);
  destination.searchParams.set("utm_source", "print");
  destination.searchParams.set("utm_medium", "direct_mail");
  destination.searchParams.set("utm_campaign", "wi2_print_campaign");
  destination.searchParams.set("cid", cleanId);

  return NextResponse.redirect(destination, 307);
}
