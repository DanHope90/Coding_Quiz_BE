const express = require('express');
const router = express.Router();
const { getQuiz, getQuizId }  = require("../controllers/quizController");

router.get("/", getQuiz);

router.get("/:id", getQuizId);

module.exports = router;