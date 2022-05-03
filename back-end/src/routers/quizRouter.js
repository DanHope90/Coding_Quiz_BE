const express = require('express');
const router = express.Router();
const {getQuizQ, getQuizQId, postQuizQ } = require("../controllers/quizController");

router.get("/", getQuizQ);

router.get("/:id");
 
router.post("/", postQuizQ);

module.exports = router;