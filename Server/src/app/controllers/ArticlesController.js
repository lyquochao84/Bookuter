const db = require('../../database');

class ArticlesController {
  index(req, res) {
    db.query("SELECT * FROM articles", (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error retrieving articles from the database");
      } 
      else {
        res.json(result);
      }
    });
  }
}

module.exports = new ArticlesController();
