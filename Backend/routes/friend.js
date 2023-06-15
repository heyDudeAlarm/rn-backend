const router = require('express').Router();
const friend = require('../controllers/friend');

router.get('/', friend.searchUser); //유저 조회

router.post('/', friend.addUser);