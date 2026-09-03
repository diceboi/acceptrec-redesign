"use server";

import { Resend } from "resend";
import { sendSlackMessage } from "./slack";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitWorkforceCalculatorLead(payload) {
  try {
    const { contact = {}, calculation = {}, attribution = {} } = payload || {};

    // 1. Honeypot check if present
    if (contact._gotcha) {
      console.warn("Honeypot triggered (Workforce Calculator)");
      return { success: true };
    }

    const isReview = contact.form_intent === "workforce_cost_review";
    const title = isReview
      ? "📋 New Workforce Cost Review Request"
      : "📧 Calculator Result Email Request";

    const formatMoney = (val) =>
      val !== undefined && val !== null
        ? "£" + Number(val).toLocaleString("en-GB")
        : "N/A";

    const formatSignedMoney = (val) => {
      if (val === undefined || val === null) return "N/A";
      const num = Number(val);
      if (num > 0) return "+£" + num.toLocaleString("en-GB");
      if (num < 0) return "-£" + Math.abs(num).toLocaleString("en-GB");
      return "£0";
    };

    // 2. Build Slack blocks
    const blocks = [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: title,
          emoji: true,
        },
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Name:*\n${contact.firstName || ""} ${contact.lastName || ""}`.trim(),
          },
          {
            type: "mrkdwn",
            text: `*Company:*\n${contact.company || "N/A"}`,
          },
        ],
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Email:*\n${contact.email || "N/A"}`,
          },
          {
            type: "mrkdwn",
            text: `*Phone:*\n${contact.phone || "Not provided"}`,
          },
        ],
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Job Title:*\n${contact.jobTitle || "Not provided"}`,
          },
          {
            type: "mrkdwn",
            text: `*Intent:*\n${isReview ? "Workforce Cost Review" : "Email Result"}`,
          },
        ],
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*📊 Calculation Summary:*",
        },
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Agency Margin:*\n${formatMoney(calculation.annual_agency_margin)}`,
          },
          {
            type: "mrkdwn",
            text: `*Admin / Headcount Value:*\n${formatMoney(calculation.administration_headcount_value)}`,
          },
        ],
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Attrition Saving:*\n${formatMoney(calculation.attrition_value)} (${calculation.prevented_early_leavers || 0} prevented leavers)`,
          },
          {
            type: "mrkdwn",
            text: `*Total Potential Value:*\n${formatMoney(calculation.total_potential_value)}`,
          },
        ],
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Net Value After Margin:*\n${formatMoney(calculation.net_potential_value)}`,
          },
          {
            type: "mrkdwn",
            text: `*Value Multiple:*\n${calculation.value_multiple ? calculation.value_multiple + "x" : "N/A"}`,
          },
        ],
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Admin Scenario:*\n${calculation.admin_scenario || "N/A"}`,
          },
          {
            type: "mrkdwn",
            text: `*Attrition Known:*\n${calculation.attrition_information_known ? "Yes" : "No (Information gap)"}`,
          },
        ],
      },
    ];

    if (contact.message) {
      blocks.push({
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Message:*\n${contact.message}`,
        },
      });
    }

    // Campaign attribution
    const utmDetails = [
      attribution.utm_source ? `Source: ${attribution.utm_source}` : null,
      attribution.utm_medium ? `Medium: ${attribution.utm_medium}` : null,
      attribution.utm_campaign ? `Campaign: ${attribution.utm_campaign}` : null,
      attribution.utm_content ? `Content: ${attribution.utm_content}` : null,
      attribution.landing_url ? `URL: ${attribution.landing_url}` : null,
    ]
      .filter(Boolean)
      .join(" | ");

    if (utmDetails) {
      blocks.push({
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: `📍 *Attribution:* ${utmDetails}`,
          },
        ],
      });
    }

    // 3. Send Slack notification (background-friendly, non-blocking if fails)
    try {
      await sendSlackMessage(blocks);
    } catch (slackErr) {
      console.warn("Slack notification warning:", slackErr.message);
    }

    // 4. Send Email via Resend
    if (contact.email) {
      const emailSubject = isReview
        ? `Workforce Cost Review Request Confirmation - Accept Recruitment`
        : `Your Temporary Workforce Cost Calculation - Accept Recruitment`;

      const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f8; margin: 0; padding: 24px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
    .header { background: #060810; padding: 32px 36px; text-align: left; border-bottom: 3px solid #00a5a5; }
    .logo { font-size: 20px; font-weight: 900; letter-spacing: 0.05em; color: #ffffff; text-transform: uppercase; }
    .logo-teal { color: #33c1bf; }
    .header-sub { color: #94a3b8; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 6px; }
    .content { padding: 36px; }
    h1 { font-size: 22px; font-weight: 800; color: #0f172a; margin-top: 0; margin-bottom: 12px; }
    p { font-size: 14px; line-height: 1.6; color: #475569; margin: 0 0 16px; }
    .highlight-card { background: #f0fdfa; border: 1px solid #ccfbf1; border-radius: 12px; padding: 20px; margin: 24px 0; }
    .highlight-label { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: #0f766e; }
    .highlight-title { font-size: 18px; font-weight: 800; color: #115e59; margin-top: 4px; }
    .highlight-desc { font-size: 13px; color: #134e4a; margin-top: 6px; margin-bottom: 0; }
    table.data-table { width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 13px; }
    table.data-table th, table.data-table td { padding: 12px 14px; text-align: left; border-bottom: 1px solid #e2e8f0; }
    table.data-table td.amount { text-align: right; font-weight: 700; color: #0f172a; }
    table.data-table tr.total-row td { background: #f8fafc; font-weight: 800; color: #0f172a; border-bottom: 2px solid #cbd5e1; font-size: 14px; }
    table.data-table tr.total-row td.amount { color: #00a5a5; }
    table.data-table tr.multiple-row td { background: #f0fdfa; font-weight: 800; color: #0f766e; border-bottom: none; font-size: 14px; }
    table.data-table tr.multiple-row td.amount { color: #0f766e; font-size: 16px; }
    .button-container { text-align: center; margin: 32px 0; }
    .button { display: inline-block; background: #00a5a5; color: #ffffff !important; padding: 14px 28px; border-radius: 10px; font-weight: 700; font-size: 14px; text-decoration: none; }
    .footer { background: #f8fafc; padding: 24px 36px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; }
    .footer a { color: #00a5a5; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">ACCEPT <span class="logo-teal">RECRUITMENT</span></div>
      <div class="header-sub">WI² Temporary Workforce Cost Calculator</div>
    </div>
    
    <div class="content">
      <h1>Hello ${contact.firstName || "there"},</h1>
      <p>Thank you for using our <strong>WI² Temporary Workforce Cost Calculator</strong>. Below is the tailored summary of the figures you entered and the potential operational value identified for <strong>${contact.company || "your operation"}</strong>.</p>
      
      <div class="highlight-card">
        <div class="highlight-label">Commercial Finding</div>
        <div class="highlight-title">${isReview ? "Workforce Cost Review Requested" : "Commercial Summary"}</div>
        <p class="highlight-desc">Based on your figures, ${formatMoney(calculation.total_potential_value)} of potential value compares with approximately ${formatMoney(calculation.annual_agency_margin)} of agency margin. In net financial terms, the service could effectively pay for itself and return a further ${formatSignedMoney(calculation.net_potential_value)} in operational value.</p>
      </div>

      <table class="data-table">
        <tbody>
          <tr>
            <td>Estimated Annual Agency Margin</td>
            <td class="amount">${formatMoney(calculation.annual_agency_margin)}</td>
          </tr>
          <tr>
            <td>Potential Admin / Headcount Value Released</td>
            <td class="amount">${formatMoney(calculation.administration_headcount_value)}</td>
          </tr>
          <tr>
            <td>Potential Early Attrition & Induction Value</td>
            <td class="amount">${calculation.attrition_value ? formatMoney(calculation.attrition_value) : "Excluded"}</td>
          </tr>
          <tr class="total-row">
            <td>Total Potential Annual Value</td>
            <td class="amount">${formatMoney(calculation.total_potential_value)}</td>
          </tr>
          <tr>
            <td>Potential Net Value After Agency Margin</td>
            <td class="amount">${formatSignedMoney(calculation.net_potential_value)}</td>
          </tr>
          <tr class="multiple-row">
            <td>Value Returned Per £1 Margin Paid</td>
            <td class="amount">${calculation.value_multiple ? calculation.value_multiple + "x" : "N/A"}</td>
          </tr>
        </tbody>
      </table>

      ${
        isReview
          ? `<p><strong>What happens next?</strong> Our senior workforce intelligence team will review your figures against actual operational workflows and contact you shortly at <strong>${contact.phone || contact.email}</strong> to validate the baseline data.</p>`
          : `<p><strong>Next Step:</strong> If you would like to test these assumptions against actual operational workflows and see whether these savings are feasible in your business, request a straightforward <strong>Workforce Cost Review</strong>.</p>
             <div class="button-container">
               <a href="https://www.acceptrec.co.uk/workforce-cost-calculator#review" class="button">Request a Workforce Cost Review</a>
             </div>`
      }

      <p style="font-size: 11px; color: #94a3b8; margin-top: 28px; line-height: 1.5;">
        <em>Disclaimer: This calculator provides an illustrative estimate based solely on user-entered assumptions. It is not a guarantee of financial return or commercial performance. Released capacity creates value through redeployment, higher-value work or avoided additional headcount.</em>
      </p>
    </div>

    <div class="footer">
      <p>Accept Recruitment Ltd &middot; <a href="https://www.acceptrec.co.uk">www.acceptrec.co.uk</a></p>
    </div>
  </div>
</body>
</html>
      `;

      try {
        const emailResult = await resend.emails.send({
          from: "Accept Recruitment <website@acceptrec.co.uk>",
          to: [contact.email],
          bcc: ["szasz.szabolcs1995@gmail.com", "admin@acceptrec.co.uk"],
          subject: emailSubject,
          html: emailHtml,
        });

        if (emailResult.error) {
          console.error("Resend delivery error:", emailResult.error);
        } else {
          console.log("Resend delivery success, ID:", emailResult.data?.id);
        }
      } catch (emailErr) {
        console.error("Failed to send email via Resend:", emailErr);
      }
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting workforce calculator lead:", error);
    return { success: false, error: error.message };
  }
}
