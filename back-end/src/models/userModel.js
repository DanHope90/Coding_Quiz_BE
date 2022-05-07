const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema(
 {
    userName: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        len: {
            args: [6],
            required: [true, 'Password must be at least 6 characters long']
        }
    },
    savedQuizzes: [{
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            reg: "Quiz"
        },
        score: Number,
    }]

  },
{
    timestamps: true,
});

module.exports = mongoose.model("User", usersSchema);