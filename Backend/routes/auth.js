//컨트롤러 연결
const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const auth = require('../controllers/auth');

router.post('/join', auth.join);
router.get("/login", auth.login);

module.exports = router;