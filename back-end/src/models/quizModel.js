const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  
    quiz: String,
      question: String,
       answers: {
        answer_a: String,
        answer_b: String,
        answer_c: String,
        answer_d: String,
      },
      correct_answers: {
        correct_answers_a: Boolean,
        correct_answers_b: Boolean,
        correct_answers_c: Boolean,
        correct_answers_d: Boolean,
      },  
  },
{
    timestamps: true,
});

module.exports = mongoose.model('Quiz', quizSchema);