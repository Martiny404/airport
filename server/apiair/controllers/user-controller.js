const db = require('../db');

class UserController {
	async createUser(req, res) {
		const { name, surname, time_create } = req.body;
		const newPerson = await db.query(
			'INSERT INTO person (name, surname, time_create) values ($1, $2, $3) RETURNING *',
			[name, surname, time_create]
		);
		res.json(newPerson.rows[0]);
	}

	async getUsers(req, res) {
		const users = await db.query('SELECT * from person;');
		res.json(users.rows);
	}

	async getOneUser(req, res) {
		const id = req.params.id;
		const user = await db.query('SELECT * from person where id=$1;', [id]);
		res.json(user.rows);
	}

	async updateUser(req, res) {
		const { id, name, surname } = req.body;
		const user = await db.query(
			'UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *',
			[name, surname, id]
		);
		res.json(user.rows[0]);
	}

	async deleteUser(req, res) {
		const id = req.params.id;
		const user = await db.query('DELETE FROM person where id=$1', [id]);
		res.json(user.rows[0]);
	}

	async getUserByName(req, res) {
		const name = req.query.name || '';
		const surname = req.query.surname || '';
		const sortBy = req.query.sortBy || 'ASC';
		const users = await db.query(
			'select * from person where name ilike $1 AND surname ilike $2 ORDER BY time_create ' +
				sortBy,
			['%' + name + '%', '%' + surname + '%']
		);
		res.json(users.rows);
	}
}

module.exports = new UserController();
