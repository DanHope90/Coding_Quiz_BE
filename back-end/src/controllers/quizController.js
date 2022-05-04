  const asyncHandler = require('express-async-handler'); 
  const Quiz = require("../models/quizModel");

 // find all quizzes in database 
 // GET /api/quizzes

 const getQuiz = asyncHandler (async (req, res) =>  {
    const quiz = await Quiz.find()
    res.status(200).json(quiz);
 });

 // Find a quiz by id 
 // GET /api/quizzes/:id

const getQuizId = async (req, res) => {

  await Quiz.findById(req.params.id).then(quiz => {
      if(!quiz){
         res.status(404)
         throw new Error("Quiz not found")
      } else {
         res.status(200).json(quiz)
      }
   })
}

module.exports = {getQuiz, getQuizId};