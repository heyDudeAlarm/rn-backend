const mariadb = require('mariadb');

const pool = mariadb.createPool({
	host: "heydude-db.cxbfr9x61xea.eu-north-1.rds.amazonaws.com",
    user: "root",
    password: "database",
    database: "heydude",
    connectionLimit: 5
});

(async function() {
conn = await pool.getConnection();
	const rows = await conn.query("SELECT 1 as val");
console.log(rows);
})();

