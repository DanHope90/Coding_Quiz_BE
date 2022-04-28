const mongoose = require('mongoose');

const questionsSchema = mongoose.Schema({
    question: String,
    answer_a: String,
    answer_b: String,
    answer_c: String,
    answer_d: String,
    correct_answer: String,
},
{
    timestamps: true,
});

module.exports = mongoose.model('Question', questionsSchema);