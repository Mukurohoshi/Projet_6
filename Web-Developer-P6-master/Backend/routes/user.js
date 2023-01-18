const express = require('express');
const router = express.Router();

const userCtrl =require('../controllers/user');
const PasswordValidator = require("../middleware/passwordvalidator");
const ratelimite = require("../middleware/limiter");

router.post('/signup', PasswordValidator , userCtrl.signup);
router.post('/login', ratelimite, userCtrl.login);

module.exports = router;