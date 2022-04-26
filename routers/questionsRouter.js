const express = require('express');
const router = express.Router();
const questionModel = require("../models/questionsModel");
const mongoose = require("mongoose");

router.get("/", (req, res) => {
    res.status(200).json();
});
 
router.post("/", (req, res, next) => {
    const questions = new questionModel({
        _id: mongoose.Types.ObjectId(),
        question: req.body.question,
        answer_a: req.body.answer_a,
        answer_b: req.body.answer_b,
        answer_c: req.body.answer_c,
        answer_d: req.body.answer_d,
        correct_answer: req.body.correct_answer,
    });
    questions.save().then(result => {
      console.log(result);
      res.status(201).json();
    })
    .catch(err => { console.log(err)
     res.status(500).json({
        error: err
     });
    });
});

router.get("/:id", (req, res) => {
    const id = req.params.questionsId;
    questionModel.findById(id)
      .then(doc => {console.log(doc);
        res.status(200).json(doc);
    })
      .catch(err => console.log(err));
        res.status(500).json({error: err});
})

module.exports = router;