const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({

  quizName: String,
  description: String,
  questions: []
});


module.exports = mongoose.model('Quiz', quizSchema);
