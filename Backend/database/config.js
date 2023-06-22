const mariadb = require('mariadb');
require('dotenv').config({
    path: '../.env'
});

const pool = mariadb.createPool({
    host: "heydude-db.cxbfr9x61xea.eu-north-1.rds.amazonaws.com",
    user: "root",
    password: "database",
    database: "heydude",
    connectionLimit: 5
});

module.exports = pool;