const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema(
 {
    userName: {
        type: String,
        required: [true, 'Please add a name']
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
    }
  },
{
    timestamps: true,
});

module.exports = mongoose.model("User", usersSchema);