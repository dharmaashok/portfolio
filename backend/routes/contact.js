const express = require('express');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

const router = express.Router();

// Rate limiting for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 contact form submissions per windowMs
  message: { error: 'Too many contact form submissions, please try again later.' }
});

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD
    }
  });
};

// Contact form submission endpoint
router.post('/', 
  contactLimiter,
  [
    body('name').trim().isLength({ min: 2, max: 50 }).escape(),
    body('email').isEmail().normalizeEmail(),
    body('message').trim().isLength({ min: 10, max: 1000 }).escape()
  ],
  async (req, res) => {
    try {
      // Validation check
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ 
          error: 'Validation failed', 
          details: errors.array() 
        });
      }

      const { name, email, message } = req.body;

      // Create email transporter
      const transporter = createTransporter();

      // Email to you (notification)
      const notificationEmail = {
        from: process.env.EMAIL_USER,
        to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
        subject: `Portfolio Contact: Message from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
      };

      // Auto-reply email to sender
      const autoReplyEmail = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for your message - Dharma\'s Portfolio',
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for your message. I have received your inquiry and will get back to you soon.</p>
          <p>Best regards,<br>Dharma</p>
          <hr>
          <p><em>This is an automated response. Please do not reply to this email.</em></p>
        `
      };

      // Send emails
      await transporter.sendMail(notificationEmail);
      await transporter.sendMail(autoReplyEmail);

      res.json({ 
        success: true, 
        message: 'Message sent successfully!' 
      });

    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ 
        error: 'Failed to send message. Please try again later.' 
      });
    }
  }
);

module.exports = router;
