const util = require('util');
const jwt = require("jsonwebtoken");
const db = require("../../database");

const queryAsync = util.promisify(db.query).bind(db);

class UserController {
  display(req, res) {
    const { token } = req.cookies;

    // Check if the user is authenticated
    if (token) {
      jwt.verify(token, "haidfhiwef", {}, (err, user) => {
        if (err) {
          if (err.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token has expired" });
          } else {
            throw err;
          }
        }

        const { name } = user;

        // Check if the user has a favorites array in the session
        if (!req.session.userFavorites) {
          req.session.userFavorites = {};
        }

        // Retrieve the user's favorite books
        const favoriteBooks = req.session.userFavorites[name] || [];
        res.json({ favoriteBooks });
      });
    } else {
      res.status(401).json({ message: "Unauthorized User" });
    }
  }

  async save(req, res) {
    const { token } = req.cookies;
    const data = req.body;
    const { id, title, language, price, genre } = data;

    // Check if the user is authenticated
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized User' });
    }

    // Decode the JWT to get user information
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, 'haidfhiwef'); // Replace 'your-secret-key' with your actual JWT secret
    } 
    catch (error) {
      return res.status(401).json({ message: 'Invalid Token' });
    }

    const { name } = decodedToken;

    // Retrieve user_id from the database based on the user's name
    try {
      const queryResult = await queryAsync(
        'SELECT user_id FROM users WHERE name = ?',
        [name]
      );

      if (queryResult.length > 0) {
        const user_id = queryResult[0].user_id;

        // Check if the user has a favorites array in the session
        if (!req.session.userFavorites) {
          req.session.userFavorites = {};
        }

        // Check if the book is already in favorites for this user
        if (req.session.userFavorites[name]) {
          const existingBook = req.session.userFavorites[name].findIndex(
            (book) => book.id === id
          );

          if (existingBook !== -1) {
            // If the book is already in favorites, remove it
            req.session.userFavorites[name].splice(existingBook, 1);
            return res.status(200).json({ message: 'Book removed from favorites' });
          }
        }

        // If the book is not in favorites, add it for this user
        if (!req.session.userFavorites[name]) {
          req.session.userFavorites[name] = [];
        }

        req.session.userFavorites[name].push({ id, title, language, price, genre });
        return res.status(200).json({ message: 'Book added to favorites successfully.', user_id });
      } 
      else {
        console.log('User not found');
        return res.status(404).json({ message: 'User not found' });
      }
    } 
    catch (error) {
      console.error('Error retrieving user_id from database:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = new UserController();
