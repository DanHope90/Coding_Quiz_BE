const mongoose = require('mongoose');

const questionsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    question: String,
    answer_a: String,
    answer_b: String,
    answer_c: String,
    answer_d: String,
    correct_answer: String,
});

module.exports = mongoose.model('Products', questionsSchema);