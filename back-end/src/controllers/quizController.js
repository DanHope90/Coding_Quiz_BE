  const asyncHandler = require('express-async-handler'); 

  const Quiz = require("../models/quizModel");

 // GET /api/quiz
 const getQuizQ = asyncHandler (async (req, res) =>  {
    const quiz = await Quiz.find()
    res.status(200).json(quiz);
 });

 // Get quiz questions by id
 // Will want to just get the question and answer 
const getQuizQId = async (req, res, id ) => {
   const quiz = await Quiz.findById(id).exec();

   if (quiz) {
      res.status(200).json(quiz)
   } else {
      res.status(404)
      throw new Error("Question not found")
   }
};


// POST /api/quiz 
 const postQuizQ = asyncHandler (async (req, res) => {
    const quizQuestions = req.body;
     if(!quizQuestions) {
        res.status(400)
        throw new Error("Please add questions!")
     }
      const quiz = await Quiz.create({quizQuestions})
         res.status(200).json(quiz);
 });

 module.exports = {getQuizQ, getQuizQId, postQuizQ};