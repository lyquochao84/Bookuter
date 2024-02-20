const express = require("express");
const router = express.Router();

const booksController = require("../app/controllers/BooksController");

// [GET] Every books details
router.get("/", booksController.index);

// [GET] Featured Books
router.get("/featuredBooks", booksController.featuredBooks);

// [GET] Fiction Books
router.get("/Fiction", booksController.fiction);

// [GET] Non-Fiction Books
router.get("/Non-Fiction", booksController.nonfiction);

// [GET] Science Books
router.get("/Science", booksController.science);

// [GET] History Books
router.get("/History", booksController.history);

// [GET] Horror Books
router.get("/Horror", booksController.horror);

// [GET] Business Books
router.get("/Business", booksController.business);

// [GET] Literature Books
router.get("/Literature", booksController.literature);

// [GET] Mystery Books
router.get("/Mystery", booksController.mystery);

// [GET] Romance Books
router.get("/Romance", booksController.romance);

module.exports = router;
