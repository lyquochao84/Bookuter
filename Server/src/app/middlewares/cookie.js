const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

// User session
app.use(cookieParser());

module.exports = app;