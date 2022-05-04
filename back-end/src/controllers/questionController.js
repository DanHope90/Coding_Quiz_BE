const asyncHandler = require("express-async-handler");
const Question = require("../models/questionModel");

// find all questions
// GET /api/question

const getQuestion = asyncHandler (async (req, res) => {
    const question = await Question.find()
    res.status(200).json(question);
})

// find a question by id 
// GET /api/question/:id

const getQuestionId = async (req, res) => {

    await Question.findById(req.params.id).then(question => {
        if(!question) {
            res.status(404)
            throw new Error("Question not found") 
        } else {
            res.status(200).json(question)
        }
    })
};

module.exports = {getQuestion, getQuestionId};