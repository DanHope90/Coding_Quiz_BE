  const asyncHandler = require('express-async-handler'); 

 // GET /api/questions
 const getQuestion = asyncHandler (async (req, res) =>  {
    res.status(200).json({message: "Get Questions"}) ;
 });
// POST /api/questions
 const postQuestion = asyncHandler (async (req, res) => {
     if(!req.body.text){
        res.status(400)
        throw new Error("Please add questions!")
     }
        res.status(200).json({message: "Set Questions"});
 });

 module.exports = {getQuestion, postQuestion};