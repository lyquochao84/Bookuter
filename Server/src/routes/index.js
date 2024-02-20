const booksRouter = require('./books');
const usersRouter = require('./users');
const authRouter = require('./auth');
const articlesRouter = require('./articles');
const express = require("express");
const router = express.Router();

// Books 
router.use('/books', booksRouter);

// Aritlces
router.use('/articles', articlesRouter);

// Users 
router.use('/users', usersRouter);

// Authentication
router.use('/auth', authRouter);

module.exports = router;