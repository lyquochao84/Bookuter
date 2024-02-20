const express = require("express");
const router = express.Router();

const articlesController = require('../app/controllers/ArticlesController');

router.get('/', articlesController.index);

module.exports = router;