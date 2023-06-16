//컨트롤러 연결
const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');
const authenticate = require('../middleware/authentication');

// /auth/...
router.post('/join', auth.join);
router.post("/login", auth.login);
// router.get("/me", authenticate, auth.me);
router.get("/device_token", authenticate ,auth.getToken);

// put : 토큰 재저장은 나중에
module.exports = router;