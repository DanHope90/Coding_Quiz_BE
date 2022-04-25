const express = require("express");
const app = express();

const APP_PORT = 4000;

app.get("/", function (req, res) {
    res.send("Hello world!")
});

app.listen(APP_PORT, () => {
    console.log(`Our App is now listening on http://localhost:${APP_PORT}`);
});