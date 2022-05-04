const express = require('express');
const router = express.Router();
const { getQuestion, getQuestionId } = require("../controllers/questionController");

router.get("/", getQuestion);

router.get("/:id", getQuestionId);

module.exports = router;