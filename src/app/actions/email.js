"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendGetStartedEmail(formData) {
  try {
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
      to: ['szasz.szabolcs1995@gmail.com'],
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
    const { 
      fullName, 
      email, 
      companyName, 
      sector, 
      message 
    } = formData;

    const { data, error } = await resend.emails.send({
      from: 'Accept Recruitment <website@acceptrec.co.uk>',
      to: ['szasz.szabolcs1995@gmail.com'],
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
      to: ['szasz.szabolcs1995@gmail.com'],
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
