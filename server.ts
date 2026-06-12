import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = Number(process.env.API_PORT || 4000);

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpSecure = process.env.SMTP_SECURE === 'true';
const smtpRequireTLS = process.env.SMTP_REQUIRE_TLS === 'true';
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const smtpFrom = process.env.SMTP_FROM || 'sales@queenslakehouse.com';
const adminEmail = process.env.ADMIN_EMAIL || 'sales@queenslakehouse.com';

if (!smtpHost || !smtpUser || !smtpPass) {
  console.warn('SMTP environment variables are not fully configured. Email delivery will fail until SMTP_HOST, SMTP_USER, and SMTP_PASS are set.');
}

const transport = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpSecure,
  requireTLS: smtpRequireTLS,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

app.use(express.json());

app.post('/api/enquiry', async (req, res) => {
  const { name, email, dateStart, dateEnd, roomType, guests, message, phone } = req.body;

  if (!name || !email || !dateStart || !dateEnd) {
    return res.status(400).json({ error: 'Missing required fields: name, email, check-in and check-out dates.' });
  }

  const body = `New enquiry received from ${name}\n\n` +
    `Email: ${email}\n` +
    `Phone: ${phone || 'N/A'}\n` +
    `Room: ${roomType}\n` +
    `Check-in: ${dateStart}\n` +
    `Check-out: ${dateEnd}\n` +
    `Guests: ${guests}\n` +
    `Message: ${message || 'N/A'}\n`;

  try {
    await transport.sendMail({
      from: smtpFrom,
      to: adminEmail,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: body,
    });

    return res.status(200).json({ status: 'sent' });
  } catch (error) {
    console.error('Failed to send enquiry email:', error);
    return res.status(500).json({ error: 'Failed to send enquiry email.' });
  }
});

app.listen(port, () => {
  console.log(`Email API server listening at http://localhost:${port}`);
});
