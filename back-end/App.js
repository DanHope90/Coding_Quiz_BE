const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const {errorHandler} = require("./src/middleware/errorMiddleware");
const connectDB = require("./src/config/db");
const questionsRoutes = require("./src/routers/questionsRouter")
const port = process.env.PORT || 4000;

connectDB()

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/questions", questionsRoutes);

app.use(errorHandler);

//maybe think of creating an environment variable for port connection for deployment
// const APP_PORT = 4000;
app.listen(port, () => {
    console.log(`Our App is now listening on http://localhost:${port}`);
});