const db = require('../../database');

class BooksController {
  // [GET] /books
  index(req, res) {
    db.query("SELECT * FROM books", (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error retrieving book details from the database");
      } else {
        res.json(results);
      }
    });
  }

  // [GET] /books/featuredBooks
  featuredBooks(req, res) {
    db.query("SELECT * FROM books WHERE isFeatured = 1", (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error retrieving book details from the database");
      } else {
        res.json(results);
      }
    });
  }

  // [GET] /books/Fiction
  fiction(req, res) {
    db.query('SELECT * FROM books WHERE genre = "Fiction"', (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error retrieving book details from the database");
      } else {
        res.json(result);
      }
    });
  }

  // [GET] /books/Non-Fiction
  nonfiction(req, res) {
    db.query(
      'SELECT * FROM books WHERE genre = "Non-Fiction"',
      (err, result) => {
        if (err) {
          console.error(err);
          res
            .status(500)
            .send("Error retrieving book details from the database");
        } else {
          res.json(result);
        }
      }
    );
  }

  // [GET] /books/Science
  science(req, res) {
    db.query('SELECT * FROM books WHERE genre = "Science"', (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error retrieving book details from the database");
      } else {
        res.json(result);
      }
    });
  }

  // [GET] /books/History
  history(req, res) {
    db.query('SELECT * FROM books WHERE genre = "History"', (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error retrieving book details from the database");
      } else {
        res.json(result);
      }
    });
  }

  // [GET] /books/Horror
  horror(req, res) {
    db.query('SELECT * FROM books WHERE genre = "Horror"', (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error retrieving book details from the database");
      } else {
        res.json(result);
      }
    });
  }

  // [GET] /books/Business
  business(req, res) {
    db.query('SELECT * FROM books WHERE genre = "Business"', (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error retrieving book details from the database");
      } else {
        res.json(result);
      }
    });
  }

  // [GET] /books/Literature
  literature(req, res) {
    db.query(
      'SELECT * FROM books WHERE genre = "Literature"',
      (err, result) => {
        if (err) {
          console.error(err);
          res
            .status(500)
            .send("Error retrieving book details from the database");
        } else {
          res.json(result);
        }
      }
    );
  }

  // [GET] /books/Mystery
  mystery(req, res) {
    db.query('SELECT * FROM books WHERE genre = "Mystery"', (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error retrieving book details from the database");
      } else {
        res.json(result);
      }
    });
  }

  // [GET] /books/Romance
  romance(req, res) {
    db.query('SELECT * FROM books WHERE genre = "Romance"', (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error retrieving book details from the database");
      } else {
        res.json(result);
      }
    });
  }
}

module.exports = new BooksController();
