// Load environment variables from .env
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');

const app = express();

// Use EJS for HTML templates
app.set('view engine', 'ejs');

// Serve static files (logo, CSS) from /public
app.use(express.static('public'));

// Allow Express to read form data from POST requests
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Use our routes
app.use('/', indexRouter);

// Render provides its own PORT, so use it if available
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));