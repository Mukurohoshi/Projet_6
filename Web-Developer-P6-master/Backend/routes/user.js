const express = require('express');
const router = express.Router();

const userCtrl =require('../controllers/user');
const PasswordValidator = require("../middleware/passwordvalidator");
router.post('/signup', PasswordValidator , userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;