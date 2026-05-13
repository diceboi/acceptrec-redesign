"use server";

import { notifyGetStarted, notifyInnovation, notifyPayQuery } from './slack';

async function verifyTurnstileToken(token) {
  if (!token) return false;

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${token}`,
      }
    );

    const outcome = await response.json();
    return outcome.success;
  } catch (error) {
    console.error("Turnstile Verification Error:", error);
    return false;
  }
}

export async function sendGetStartedEmail(formData) {
  try {
    // 1. Honeypot check
    if (formData._gotcha) {
      console.warn("Honeypot triggered (Get Started)");
      return { success: true }; // Silently fail for bots
    }

    // 2. Turnstile check
    const isHuman = await verifyTurnstileToken(formData.turnstileToken);
    if (!isHuman) {
      return { success: false, error: "Spam validation failed. Please try again." };
    }

    // Send to Slack
    await notifyGetStarted(formData);

    return { success: true };
  } catch (error) {
    console.error('Server Action Error:', error);
    return { success: false, error: error.message };
  }
}

export async function sendInnovationEmail(formData) {
  try {
    // 1. Honeypot check
    if (formData._gotcha) {
      console.warn("Honeypot triggered (Innovation)");
      return { success: true };
    }

    // 2. Turnstile check
    const isHuman = await verifyTurnstileToken(formData.turnstileToken);
    if (!isHuman) {
      return { success: false, error: "Spam validation failed. Please try again." };
    }

    // Send to Slack
    await notifyInnovation(formData);

    return { success: true };
  } catch (error) {
    console.error('Server Action Error:', error);
    return { success: false, error: error.message };
  }
}

export async function sendPayQueryEmail(formData) {
  try {
    // 1. Honeypot check
    if (formData._gotcha) {
      console.warn("Honeypot triggered (Pay Query)");
      return { success: true };
    }

    // 2. Turnstile check
    const isHuman = await verifyTurnstileToken(formData.turnstileToken);
    if (!isHuman) {
      return { success: false, error: "Spam validation failed. Please try again." };
    }

    // Send to Slack
    await notifyPayQuery(formData);

    return { success: true };
  } catch (error) {
    console.error('Server Action Error:', error);
    return { success: false, error: error.message };
  }
}

