
const express = require('express');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

const router = express.Router();

router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('message').trim().notEmpty().withMessage('Message is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, message } = req.body;
    try {
      
      const contact = new Contact({ name, email, message });
      await contact.save();

      
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        try {
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
          });

          await transporter.sendMail({
            from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
            replyTo: email,
            subject: `✨ New Portfolio Message from ${name}`,
            html: `
              <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f9; border-radius: 8px;">
                <h2 style="color: #4a148c;">New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />
                <h3 style="color: #333;">Message:</h3>
                <p style="background: #ffffff; padding: 15px; border-radius: 6px; border: 1px solid #e0e0e0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            `,
          });
          console.log(`Email notification sent to ${process.env.EMAIL_RECEIVER || process.env.EMAIL_USER}`);
        } catch (mailErr) {
          console.error('Nodemailer notification error (saved to DB):', mailErr.message);
        }
      }

      res.json({ success: true, contactId: contact._id });
    } catch (err) {
      console.error('Contact save error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  }
);

module.exports = router;
