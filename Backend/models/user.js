// const Sequelize = require('sequelize');
// //import connection database
// const sequelize = require('../database/database');
// const Alarm = require('./alarm')

// const User = sequelize.define('users', {
//     uid: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     email: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     },
//     nickname: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     },
//     password: {
//         type: Sequelize.STRING,
//         allowNull: false,
//     }},{
//         // don't add the timestamp attributes (updatedAt, createdAt)
//         timestamps: false,
//         // If don't want createdAt
//         createdAt: false,
//         // If don't want updatedAt
//         updatedAt: false,
// });
// // //사용자가 여러 알람을 설정할 수 있는 1대다 관계 설정
// // User.hasMany(Alarm, {foreignKey: 'uid'});
// // User.hasMany(Records, {foreignKey: 'uid'});

// module.exports = User;