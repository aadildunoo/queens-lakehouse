import type { VercelRequest, VercelResponse } from '@vercel/node';
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

const ADMIN_EMAIL = 'sales@queenslakehouse.com';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).send('Method Not Allowed');
  }

  const details = req.body as BookingDetails;
  if (!details?.name || !details?.email || !details?.dateStart || !details?.dateEnd) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const mailText = `New enquiry received:\n\nName: ${details.name}\nEmail: ${details.email}\nPhone: ${details.phone || 'N/A'}\nCheck In: ${details.dateStart}\nCheck Out: ${details.dateEnd}\nRoom: ${details.roomType}\nGuests: ${details.guests}\nMessage: ${details.message || 'N/A'}`;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || details.email,
      to: ADMIN_EMAIL,
      subject: `New enquiry from ${details.name}`,
      text: mailText,
      replyTo: details.email,
    });

    return res.status(200).json({ status: 'sent' });
  } catch (error) {
    console.error('Email send failed', error);
    return res.status(500).json({ error: 'Email send failed' });
  }
}
