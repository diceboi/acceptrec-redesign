"use server";

export async function sendSlackMessage(blocks) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("SLACK_WEBHOOK_URL is not defined in environment variables.");
    return { success: false, error: "Slack integration not configured" };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ blocks }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Slack API error:", errorText);
      return { success: false, error: `Slack API error: ${response.statusText}` };
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending Slack message:", error);
    return { success: false, error: error.message };
  }
}

export async function notifyGetStarted(formData) {
  const { 
    challenge, 
    workersCount, 
    industry, 
    companyName, 
    department, 
    seniority, 
    firstName, 
    lastName, 
    email, 
    phone 
  } = formData;

  const blocks = [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: "🚀 New Staffing Inquiry",
        emoji: true
      }
    },
    {
      type: "section",
      fields: [
        { type: "mrkdwn", text: `*Company:*\n${companyName}` },
        { type: "mrkdwn", text: `*Contact:*\n${firstName} ${lastName}` }
      ]
    },
    {
      type: "section",
      fields: [
        { type: "mrkdwn", text: `*Email:*\n${email}` },
        { type: "mrkdwn", text: `*Phone:*\n${phone}` }
      ]
    },
    {
      type: "divider"
    },
    {
      type: "section",
      fields: [
        { type: "mrkdwn", text: `*Industry:*\n${industry}` },
        { type: "mrkdwn", text: `*Workers Needed:*\n${workersCount}` }
      ]
    },
    {
      type: "section",
      fields: [
        { type: "mrkdwn", text: `*Department:*\n${department}` },
        { type: "mrkdwn", text: `*Seniority:*\n${seniority}` }
      ]
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Current Challenge:*\n${challenge}`
      }
    }
  ];

  return sendSlackMessage(blocks);
}

export async function notifyInnovation(formData) {
  const { 
    fullName, 
    email, 
    companyName, 
    sector, 
    message 
  } = formData;

  const blocks = [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: "💡 New Innovation Partner Application",
        emoji: true
      }
    },
    {
      type: "section",
      fields: [
        { type: "mrkdwn", text: `*Full Name:*\n${fullName}` },
        { type: "mrkdwn", text: `*Email:*\n${email}` }
      ]
    },
    {
      type: "section",
      fields: [
        { type: "mrkdwn", text: `*Company:*\n${companyName}` },
        { type: "mrkdwn", text: `*Sector:*\n${sector}` }
      ]
    },
    {
      type: "divider"
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Message/Reason:*\n${message}`
      }
    }
  ];

  return sendSlackMessage(blocks);
}

export async function notifyPayQuery(formData) {
  const { 
    fullName, 
    phone, 
    niNumber, 
    weekCommencing, 
    workPlace, 
    hoursPaid, 
    hoursMissing 
  } = formData;

  const blocks = [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: "💰 New Pay Query",
        emoji: true
      }
    },
    {
      type: "section",
      fields: [
        { type: "mrkdwn", text: `*Full Name:*\n${fullName}` },
        { type: "mrkdwn", text: `*Phone:*\n${phone}` }
      ]
    },
    {
      type: "section",
      fields: [
        { type: "mrkdwn", text: `*NI Number:*\n${niNumber}` },
        { type: "mrkdwn", text: `*Week Commencing:*\n${weekCommencing}` }
      ]
    },
    {
      type: "divider"
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Workplace & Hours Worked:*\n${workPlace}`
      }
    },
    {
      type: "section",
      fields: [
        { type: "mrkdwn", text: `*Hours Paid:*\n${hoursPaid}` },
        { type: "mrkdwn", text: `*Hours Missing:*\n${hoursMissing}` }
      ]
    }
  ];

  return sendSlackMessage(blocks);
}
