const express = require("express");
const router = express.Router();

const userController = require('../app/controllers/UserController');

router.get('/favorite-list', userController.display);
router.post('/favorite-list', userController.save);

module.exports = router;