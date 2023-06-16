const router = require("express").Router();
const audio = require('../controllers/audio');
// /audio/upload/:id
router.post("/upload/:id", audio.upload);

module.exports = router;