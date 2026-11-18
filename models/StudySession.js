const mongoose = require('mongoose');

// Defines what a study session looks like in the database
const studySessionSchema = new mongoose.Schema({
  courseCode: { type: String, required: true },
  topic: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  spotsAvailable: { type: Number, required: true, min: 1 },
  createdBy: { type: String, required: true },
});

module.exports = mongoose.model('StudySession', studySessionSchema);