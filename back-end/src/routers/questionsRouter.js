const express = require('express');
const router = express.Router();
const {getQuestion, postQuestion} = require("../controllers/questionController");

router.get("/", getQuestion);
 
router.post("/", postQuestion);

module.exports = router;