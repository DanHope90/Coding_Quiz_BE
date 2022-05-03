  const asyncHandler = require('express-async-handler'); 

  const Quiz = require("../models/quizModel");

 // GET /api/quiz
 const getQuizQ = asyncHandler (async (req, res) =>  {
    const quiz = await Quiz.find()
    res.status(200).json(quiz);
 });

 // Get quiz questions by id
const getQuizQId = asyncHandler (async (req, res) => {
   const {quizId} = req.body._id
   const quiz = await Quiz.findById(quizId).select()

   if (quiz) {
      res.status(200).json(quiz)
   } else {
      res.status(404)
      throw new Error("Question not found")
   }
};


// POST /api/quiz 
 const postQuizQ = asyncHandler (async (req, res) => {
     if(!req.body.quiz) {
        res.status(400)
        throw new Error("Please add questions!")
     }
      const quiz = await Quiz.create({
        quiz: req.body.quiz
     })
         res.status(200).json(quiz);
 });

 module.exports = {getQuizQ, getQuizQId, postQuizQ};