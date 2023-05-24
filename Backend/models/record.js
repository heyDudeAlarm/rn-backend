// const sequelize = require('../database/database');
// const Sequelize = require('sequelize');
// const Alarm = require('./alarm');

// const Record = sequelize.define('records',{
//     record_user: { //녹음을 해주는 친구
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         references: {
//             model: Alarm,
//             key: 'record_user'
//         }
//     },
//     message: {
//         type: Sequelize.STRING,
//         allowNull: true,
//     },
//     url: {
//         type: Sequelize.STRING,
//         allowNull: true,
//     },
//     received_user: {
//         type: Sequelize.STRING,
//         allowNull: true,
//     }
// });

// // Record.belongsTo(Alarm, {foreignKey: 'record_user'});

// module.exports = Record;