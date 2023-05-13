const sequelize = require('../database/database');
const Sequelize = require('sequelize');
const User = require('./user');
const Record = require('./record');

const Alarm = sequelize.define('alarms', {
    uid: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'uid'
        }
    },
    label: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    time: {
        type: Sequelize.TIME,
        allowNull: false,
    },
    activate: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: true,
    },
    snooze: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    record_user: {
        type: Sequelize.STRING,
        allowNull: false,
        
    },
});

Alarm.belongsTo(User, {foreignKey: 'uid'});
Alarm.hasMany(Record, {foreignKey: 'record_user'});

module.exports = Alarm;