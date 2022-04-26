const express = require('express');
const router = express.Router();
const questionModel = require("../models/questionsModel");

router.get("/api/questions", (req, res) => {
    res.status(200).json();
});

router.get("/api/:questionsId", (req, res) => {
    const id = req.params.questionsId;
    questionModel.findById(id)
      .then(doc => {console.log(doc);
        res.status(200).json(doc);
    })
      .catch(err => console.log(err));
        res.status(500).json({error: err});
})

module.exports = router;