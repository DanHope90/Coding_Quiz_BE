const express = require("express");
const app = express();
const mongoose = require("mongoose");
const questionsRoutes = require("./routers/questionsRouter")

const APP_PORT = 4000;

//create environment variable for password ? Do we use .ENV file or nodemon.json? 
mongoose.connect("mongodb+srv://Quiz_API_Mock:Lucg65HkqmocBe6O@cluster0.08qp2.mongodb.net/Coding_Quiz_Mock?retryWrites=true&w=majority",);

app.use("/questions", questionsRoutes);

// app.get("/", (req, res) => {
//     res.send("Hello world!!!")
// });

//maybe think of creating an environment variable for port connection for deployment
app.listen(APP_PORT, () => {
    console.log(`Our App is now listening on http://localhost:${APP_PORT}`);
});