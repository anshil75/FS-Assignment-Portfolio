// models/Contact.js - Mongoose schema for contact form submissions
const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, match: /.+@.+\..+/ },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contact', contactSchema);
