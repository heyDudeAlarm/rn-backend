//컨트롤러 연결
const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');
// /auth/...
router.post('/join', auth.join);
router.post("/login", auth.login);
router.get("/device_token", auth.getToken);
// put : 토큰 재저장은 나중에
module.exports = router;