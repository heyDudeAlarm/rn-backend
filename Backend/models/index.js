const Sequelize = require('sequelize');
const User = require('./user');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const sequelize = new Sequelize('heydude', 'root', '1234',{
    host: 'localhost',
    dialect: 'mariadb'
});
const db = {};

db.sequelize = sequelize;
//앞으로 db 객체를 require해서 User라는 모델에 접근할 수 있음
// db.User = User;

// User.initiate(db);

// //다른 테이블과의 관계를 연결하는 메서드도 미리 실행
// User.associate(db);

module.exports = db;