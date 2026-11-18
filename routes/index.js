const express = require('express');
const router = express.Router();
const StudySession = require('../models/StudySession');

// Landing page: show all sessions, soonest first
router.get('/', async (req, res) => {
  const sessions = await StudySession.find().sort({ date: 1 });
  res.render('index', { sessions });
});

// Show the create form
router.get('/create', (req, res) => {
  res.render('create');
});

// Save the new session, then go back to the landing page
router.post('/create', async (req, res) => {
  await StudySession.create(req.body);
  res.redirect('/');
});

module.exports = router;