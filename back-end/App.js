const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const path = require('path');
const {errorHandler} = require("./src/middleware/errorMiddleware");
const connectDB = require("./src/config/db");
const quizRoutes = require("./src/routers/quizRouter");
const userRoutes = require("./src/routers/userRouter");
const questionRouter = require("./src/routers/questionRouter");
const cors = require("cors");
const { db } = require("./src/models/userModel");
const port = process.env.PORT || 4000;

connectDB()

const app = express();

app.use((cors()));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/user", userRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/question", questionRouter);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Our App is now listening on http://localhost:${port}`);
});