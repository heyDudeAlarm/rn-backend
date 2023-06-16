const router = require("express").Router();
const audio = require('../controllers/audio');
const authenticate = require('../middleware/authentication');

// /audio/upload
// /audio/download
router.post("/upload", authenticate , audio.upload);
router.post("/download", authenticate, audio.download);

module.exports = router;