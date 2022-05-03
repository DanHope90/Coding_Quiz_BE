const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  quiz: String,
  question: String,
  answers: [
    {answer_a: String, isCorrect: Boolean},
    {answer_b: String, isCorrect: Boolean},
    {answer_c: String, isCorrect: Boolean},
    {answer_d: String, isCorrect: Boolean},
  ],
},

{
  timestamps: true
});

module.exports = mongoose.model('Quiz', quizSchema);