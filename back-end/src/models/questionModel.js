const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({

  question: String,
  answers: [
    {a: String},
    {b: String},
    {c: String},
    {d: String},
  ], correct_answer: String
});

module.exports = mongoose.model('Question', questionSchema);