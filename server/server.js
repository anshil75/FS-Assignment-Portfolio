// server.js - Entry point for Express backend
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const contactRoutes = require('./routes/contact');
const downloadRoutes = require('./routes/download');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const clientOrigin = process.env.CLIENT_ORIGIN;
app.use(cors({
  origin: clientOrigin ? clientOrigin.replace(/\/$/, '') : '*',
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/download', downloadRoutes);

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
