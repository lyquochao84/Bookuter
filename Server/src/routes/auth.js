const express = require('express');
const router = express.Router();
const authController = require('../app/controllers/AuthController');

router.post('/signup', authController.signUp);
router.post('/signin', authController.signIn);
router.get('/check-auth', authController.checkAuth);
router.post('/logout', authController.logOut);

module.exports = router;
