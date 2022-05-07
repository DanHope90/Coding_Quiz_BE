const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getMe, saveAQuiz} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);

router.post("/login", loginUser);

router.post("/savedquizzes", saveAQuiz)

router.get("/me", protect, getMe);

module.exports = router; 