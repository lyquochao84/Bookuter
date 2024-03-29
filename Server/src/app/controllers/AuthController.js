const db = require("../../database");
const { hashPassword, verifyPassword } = require("../../../../Client/lib/auth");
const jwt = require("jsonwebtoken");

class AuthController {
  async signUp(req, res) {
    const { name, email, password } = req.body;

    // Empty input
    if (!name && !email && !password) {
      return res.status(422).json({
        message: "Please fill out the form to becomes the membership",
      });
    }

    // Empty name
    if (!name) {
      return res.status(422).json({ message: "Please input your name" });
    }

    // Invalid email format
    if (!email || !email.includes("@")) {
      return res.status(422).json({ message: "Invalid Email!" });
    }

    // Invalid password format - 7 characters long
    if (!password || password.trim().length < 7) {
      return res.status(422).json({
        message:
          "Invalid Password - password should also be at least 7 characters long.",
      });
    }

    // Check the email is already use
    const checkQuery = "SELECT * FROM users WHERE email = ?";
    db.query(checkQuery, [email], async (checkErr, checkResult) => {
      if (checkErr) {
        return res.status(500).send("Error checking for duplicate email");
      }

      if (checkResult.length > 0) {
        // Email already exists
        return res.status(422).json({
          message: "Email already in use. Please use a different email!",
        });
      }
    });

    const hashedPassword = await hashPassword(password);
    const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

    db.query(query, [name, email, hashedPassword], (err, result) => {
      if (err) {
        return res.status(500).send("Error registering user");
      } else {
        return res.json({ message: "User registered successfully" });
      }
    });
  }

  async signIn(req, res) {
    const data = req.body;
    const { email, password } = data;

    const userQuery = `SELECT * FROM users WHERE email = ?`;
    db.query(userQuery, [email], async (error, result) => {
      if (error) {
        return res.status(500).send("Error checking user credentials");
      }

      if (result.length === 0) {
        // User not found
        return res.status(401).json({ message: "Invalid Email or Password" });
      }

      const storedPassword = result[0].password;

      // Compare password with hashed password
      try {
        const isValid = await verifyPassword(password, storedPassword);

        if (isValid) {
          jwt.sign(
            { email: result[0].email, id: result[0].id, name: result[0].name },
            "haidfhiwef",
            { expiresIn: 1800 },
            (err, token) => {
              if (err) {
                throw err;
              }
              // Set the token as a cookie
              res.cookie("token", token, { httpOnly: true }).json(result[0]);

              // Send a response indicating successful login
              res.json({ message: "User logged in successfully" });
            }
          );
        } 
        else {
          // Password don't match
          return res.status(401).json({ message: "Invalid password" });
        }
      } catch (error) {
        console.error("Error verifying password:", error);
        return res.status(500).send("Error verifying password");
      }
    });
  }

  checkAuth(req, res) {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    jwt.verify(token, "haidfhiwef", {}, (err, user) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({ message: "Token has expired" });
        } else {
          return res.status(401).json({ message: "Not authenticated" });
        }
      }
      res.json(user);
    });
  }

  logOut(req, res) {
    res.clearCookie("token").json({ message: "Logout successful" });
  }
}

module.exports = new AuthController();
