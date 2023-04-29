//컨트롤러 연결
const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');

router.get('/join', auth.join);
router.get("/login", auth.login);

module.exports = router;