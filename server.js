import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Allow all origins for simplicity (since frontend and backend will be on same domain on Vercel)
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sending to yourself
      replyTo: email,
      subject: `Portfolio Contact: ${subject || 'New Message'} from ${name}`,
      text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

// For local testing (Vercel uses the exported app)
if (process.env.NODE_ENV !== 'production' && process.env.VERCEL !== '1') {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server running locally on port ${PORT}`);
  });
}

export default app;
