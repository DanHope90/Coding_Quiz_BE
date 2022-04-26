const express = require("express");
const app = express();
const mongoose = require("mongoose");
const questionsRouter = require("./routers/questionsRouter")

const APP_PORT = 4000;

//create environment variable for password ? Do we use .ENV file or nodemon.json? 
mongoose.connect("mongodb+srv://Quiz_API_Mock:MLcpD4lOWmQUZL8c@cluster0.08qp2.mongodb.net/Cluster0?retryWrites=true&w=majority",);

app.get("/", (req, res) => {
    res.send("Hello world!!!")
});

app.get("/questions", questionsRouter);

//maybe think of creating an environment variable for port connection for deployment
app.listen(APP_PORT, () => {
    console.log(`Our App is now listening on http://localhost:${APP_PORT}`);
});