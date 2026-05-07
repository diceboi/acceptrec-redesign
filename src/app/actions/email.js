"use server";

import { Resend } from 'resend';
import { notifyGetStarted, notifyInnovation, notifyPayQuery } from './slack';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const { data, error } = await resend.emails.send({
      from: 'Accept Recruitment <website@acceptrec.co.uk>',
      to: ['szasz.szabolcs1995@gmail.com', 'admin@acceptrec.co.uk'],
      subject: `New Staffing Inquiry: ${companyName}`,
      html: `
        <h2>New Staffing Inquiry from Website</h2>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Contact:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <hr />
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Current Challenge:</strong> ${challenge}</p>
        <p><strong>Workers Needed:</strong> ${workersCount}</p>
        <p><strong>Department:</strong> ${department}</p>
        <p><strong>Seniority:</strong> ${seniority}</p>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
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

    const { 
      fullName, 
      email, 
      companyName, 
      sector, 
      message 
    } = formData;

    const { data, error } = await resend.emails.send({
      from: 'Accept Recruitment <website@acceptrec.co.uk>',
      to: ['szasz.szabolcs1995@gmail.com', 'admin@acceptrec.co.uk'],
      subject: `New Innovation Partner Application: ${companyName}`,
      html: `
        <h2>New Innovation Partner Application</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Sector:</strong> ${sector}</p>
        <p><strong>Message/Reason:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
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

    const { 
      fullName, 
      phone, 
      niNumber, 
      weekCommencing, 
      workPlace, 
      hoursPaid, 
      hoursMissing 
    } = formData;

    const { data, error } = await resend.emails.send({
      from: 'Accept Recruitment <website@acceptrec.co.uk>',
      to: ['szasz.szabolcs1995@gmail.com', 'admin@acceptrec.co.uk'],
      subject: `New Pay Query: ${fullName}`,
      html: `
        <h2>New Pay Query Submission</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>NI Number:</strong> ${niNumber}</p>
        <hr />
        <p><strong>Week Commencing:</strong> ${weekCommencing}</p>
        <p><strong>Workplace & Hours Worked:</strong></p>
        <p>${workPlace}</p>
        <p><strong>Hours Paid:</strong> ${hoursPaid}</p>
        <p><strong>Hours Missing:</strong> ${hoursMissing}</p>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Server Action Error:', error);
    return { success: false, error: error.message };
  }
}

