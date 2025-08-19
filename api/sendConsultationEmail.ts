import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone, email, bestTime } = req.body;

  if (!name || !phone || !email) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Gmail address
      pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password
    },
  });

  const emailContent = `
    New Consultation Request for Glisten Hair & Aesthetics!

    Consultation Details:
    - Name: ${name}
    - Phone: ${phone}
    - Email: ${email}
    - Best Time to Call: ${bestTime || 'Not specified'}

    Please contact the client to confirm their appointment. Visit https://that-time.co.uk/glisten-hair-aesthetics for more info.

    Best,
    Glisten Hair & Aesthetics Team
  `;

  const mailOptions = {
    from: process.env.GMAIL_USER, // Sender (Gmail)
    to: 'calimoex@gmail.com', // Business owner's email
    subject: 'New Consultation Request',
    text: emailContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Consultation email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send consultation email' });
  }
}