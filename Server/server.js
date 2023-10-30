const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./database");
const app = express();
const PORT = 3001;

// [GET] Every books details
app.get("/", (req, res) => {
  db.query("SELECT * FROM books", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving book details from the database");
    } 
    else {
      res.json(results);
    }
  });
});

// [GET] Featured Books
app.get("/featuredBooks", (req, res) => {
  db.query("SELECT * FROM books WHERE isFeatured = 1", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving book details from the database");
    } 
    else {
      res.json(results);
    }
  });
});

// [GET] Fiction Books
app.get("/fiction-books", (req, res) => {
  db.query('SELECT * FROM books WHERE genre = "Fiction"', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving book details from the database");
    } 
    else {
      res.json(result);
    }
  });
});

// [GET] Non-Fiction Books

// Middleware to check security of API
app.use(cors());

// HTTP Logger
app.use(morgan("combined"));

// Hosted Server Port
app.listen(PORT, () => {
  console.log(`Server start on ${PORT}`);
});
