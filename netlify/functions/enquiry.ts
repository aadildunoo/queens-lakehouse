import type { HandlerEvent, HandlerContext } from '@netlify/functions';
import nodemailer from 'nodemailer';

interface BookingDetails {
  name: string;
  email: string;
  dateStart: string;
  dateEnd: string;
  roomType: string;
  guests: number;
  message: string;
  phone?: string;
}

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'sales@queenslakehouse.com';
const FROM_EMAIL = process.env.SMTP_FROM || `no-reply@${ADMIN_EMAIL.split('@')[1] || 'queenslakehouse.com'}`;
const missingSmtpVars = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS'].filter((key) => !process.env[key]);

if (missingSmtpVars.length > 0) {
  console.error('Missing SMTP env vars:', missingSmtpVars.join(', '));
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  requireTLS: process.env.SMTP_REQUIRE_TLS === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const mailTextFromDetails = (details: BookingDetails) =>
  `New enquiry received:\n\nName: ${details.name}\nEmail: ${details.email}\nPhone: ${details.phone || 'N/A'}\nCheck In: ${details.dateStart}\nCheck Out: ${details.dateEnd}\nRoom: ${details.roomType}\nGuests: ${details.guests}\nMessage: ${details.message || 'N/A'}`;

// HTML version of the email with simple styling matching the site
const mailHtmlFromDetails = (details: BookingDetails) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>New Enquiry</title>
  <style>
    body { font-family: 'Helvetica', Arial, sans-serif; background: #f9f9f9; color: #333; padding: 20px; }
    .container { max-width: 600px; margin: auto; background: #fff; border-radius: 8px; padding: 20px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
    h2 { color: #2c3e50; margin-top: 0; }
    table { width: 100%; border-collapse: collapse; margin-top: 15px; }
    td { padding: 8px; border-bottom: 1px solid #ececec; }
    td.label { font-weight: bold; width: 30%; }
  </style>
</head>
<body>
  <div class="container">
    <h2>New Enquiry Received</h2>
    <table>
      <tr><td class="label">Name</td><td>${details.name}</td></tr>
      <tr><td class="label">Email</td><td>${details.email}</td></tr>
      <tr><td class="label">Phone</td><td>${details.phone || 'N/A'}</td></tr>
      <tr><td class="label">Check‑In</td><td>${details.dateStart}</td></tr>
      <tr><td class="label">Check‑Out</td><td>${details.dateEnd}</td></tr>
      <tr><td class="label">Room Type</td><td>${details.roomType}</td></tr>
      <tr><td class="label">Guests</td><td>${details.guests}</td></tr>
      <tr><td class="label">Message</td><td>${details.message || 'N/A'}</td></tr>
    </table>
  </div>
</body>
</html>`;

export const handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { Allow: 'POST' },
      body: 'Method Not Allowed',
    };
  }

  if (missingSmtpVars.length > 0) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `Mail service not configured: ${missingSmtpVars.join(', ')}` }),
    };
  }

  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing request body' }),
    };
  }

  let details: BookingDetails;
  try {
    details = JSON.parse(event.body) as BookingDetails;
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON body' }),
    };
  }

  if (!details.name || !details.email || !details.dateStart || !details.dateEnd) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing required fields: name, email, dateStart, dateEnd' }),
    };
  }

  try {
    await transporter.sendMail({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      replyTo: details.email,
      subject: `New enquiry from ${details.name}`,
      text: mailTextFromDetails(details),
      html: mailHtmlFromDetails(details),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ status: 'sent' }),
    };
  } catch (error) {
    console.error('Email send failed', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Email send failed' }),
    };
  }
};
