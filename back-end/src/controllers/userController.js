const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// registers new user 
// POST /api/users - finds if user exists
const registerUser = asyncHandler (async (req, res) => {
    const { userName, email, password } = req.body

    if(!userName || !email || !password) {
        throw new Error("Please fill in all fields")
    }

    // check user exists
    const userExists = await User.findOne({email})

    if (userExists) {
        res.status(400)
        throw new Error("User already exists")
    }

    // Hash password 

    const salt = await bcrypt.genSalt(10) 
    const hashedPassword = await bcrypt.hash(password, salt)

    // creates a new user 
    const createUser = await User.create({
        userName,
        email,
        password : hashedPassword
    })

    if(createUser) { 
      res.status(201).json({
          _id: createUser.id,
          userName: createUser.userName,
          email: createUser.email,
          token: generateToken(user._id)
      })
    } else {
        res.status(400)
        throw new Error("Incorrect user data")
    }
});

// POST /api/user/login - authorise user 
const loginUser = asyncHandler (async (req, res) => {
  const { email, password } = req.body

  // checks user credentials
  const user = await User.findOne({email})

  if(user && (await bcrypt.compare(password, user.password))) {
   
    res.status(200).json({
      _id: user.id,
      userName: user.userName, 
      email: user.email,
      token: generateToken(user._id)
    }) 
  } else {
    res.status(400)
    throw new Error("Invalid credentials")
  }
});

// saves quiz and score to the user
// POST /api/user/savedquizzes
// public

// check if user // check 

const saveAQuiz = asyncHandler (async (req, res) => {

  const {userId, quizId, score} = req.body;
  
  const user = await User.findById(userId)

  if(!user) {
    res.status(400)
    throw new Error("Account not created")
  }

  if(user) {
   User.updateOne(
    {_id: userId },
    {$addToSet: {savedQuizzes: [{ _id: quizId, score }]}},
    function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
    )
} 
})


// Get user data 
// GET API/users/me
//private

const getMe = asyncHandler (async (req, res) => {
  res.json({ message: "user data display" })
})

// Generate JWT

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}


module.exports = {registerUser, loginUser, saveAQuiz, getMe}