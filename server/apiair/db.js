const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'postgres',
	password: 'maxim',
	host: 'localhost',
	port: 5432,
	database: 'airport',
});

module.exports = pool;
