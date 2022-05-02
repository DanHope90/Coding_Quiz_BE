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

    // creates a new user 
    const createUser = await User.create({
        userName,
        email,
        password,
    })

    if(createUser) { 
      res.status(200).json({
          userName: createUser.userName,
          email: createUser.email,
          password: createUser.password,
      })
    } else {
        res.status(400)
        throw new Error("Incorrect user data")
    }
});

// POST /api/users/login - authorise user 
const loginUser = asyncHandler (async (req, res) => {
  const { email, password } = req.body
  // checks user credentials
  const checkEmail = await User.find({email, password})
  const checkPassword = await User.findOne({password})

  if(!checkEmail || !checkPassword) {
    res.status(401)
      throw new Error("Incorrect credentials")
  } else {
    res.status(200).json({
        userName: checkEmail.userName,
        email: checkEmail.email,
        password: checkEmail.password,
    })
  }

});

module.exports = {registerUser, loginUser}