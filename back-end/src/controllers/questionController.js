  const asyncHandler = require('express-async-handler'); 

  const Question = require("../models/questionsModel");

 // GET /api/questions
 const getQuestion = asyncHandler (async (req, res) =>  {
    const question = await Question.find()
    res.status(200).json(question);
 });
// POST /api/questions
 const postQuestion = asyncHandler (async (req, res) => {
     if(!req.body.question) {
        res.status(400)
        throw new Error("Please add questions!")
     }

     const question = await Question.create({
        
      question: req.body.question
     })

        res.status(200).json(question);
 });

 module.exports = {getQuestion, postQuestion};