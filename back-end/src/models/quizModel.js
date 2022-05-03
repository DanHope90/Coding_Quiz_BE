const mongoose = require('mongoose');

// const quizSchema = new mongoose.Schema({
//   quiz: String,
//   question: String,
//   answers: [
    // {answer_a: String, isCorrect: Boolean},
    // {answer_b: String, isCorrect: Boolean},
    // {answer_c: String, isCorrect: Boolean},
    // {answer_d: String, isCorrect: Boolean},
//   ],
//   timestamps: true,
// });

const quizSchema = new mongoose.Schema({
  quiz: String,
  questions: [{
    question_1: String,
    answers_1: [
      {answer_a: String, isCorrect: Boolean},
      {answer_b: String, isCorrect: Boolean},
      {answer_c: String, isCorrect: Boolean},
      {answer_d: String, isCorrect: Boolean},
    ]
  },
  {
    question_2: String,
    answers_2: [
      {answer_a: String, isCorrect: Boolean},
      {answer_b: String, isCorrect: Boolean},
      {answer_c: String, isCorrect: Boolean},
      {answer_d: String, isCorrect: Boolean},
    ]
  },
  {
    question_3: String,
    answers_3: [
      {answer_a: String, isCorrect: Boolean},
      {answer_b: String, isCorrect: Boolean},
      {answer_c: String, isCorrect: Boolean},
      {answer_d: String, isCorrect: Boolean},
    ]
  },
  {
    question_4: String,
    answers_4: [
      {answer_a: String, isCorrect: Boolean},
      {answer_b: String, isCorrect: Boolean},
      {answer_c: String, isCorrect: Boolean},
      {answer_d: String, isCorrect: Boolean},
    ]
  },
  {
    question_5: String,
    answers_5: [
      {answer_a: String, isCorrect: Boolean},
      {answer_b: String, isCorrect: Boolean},
      {answer_c: String, isCorrect: Boolean},
      {answer_d: String, isCorrect: Boolean},
    ]
  },
],
}, 
    {timestamps: true},
)

module.exports = mongoose.model('Quiz', quizSchema);