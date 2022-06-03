const db = require('../db');

class PostController {
	async createPost(req, res) {
		const { equipment, date, time_create, category, reason, measures_taken, FIO, note } =
			req.body;
		const newPost = await db.query(
			`INSERT INTO posts (equipment, date, time_create, category, reason,measures_taken, FIO, note ) values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
			[equipment, date, time_create, category, reason, measures_taken, FIO, note]
		);
		res.json(newPost.rows[0]);
	}

	async getPosts(req, res) {
		const posts = await db.query('SELECT * from posts;');
		res.json(posts.rows);
	}

	async getOnePost(req, res) {
		const id = req.params.id;
		const post = await db.query('SELECT * from posts where id=$1;', [id]);
		res.json(post.rows[0]);
	}

	async updatePost(req, res) {
		// const { id, name, surname } = req.body;
		// const post = await db.query(
		// 	'UPDATE posts set name = $1, surname = $2 where id = $3 RETURNING *',
		// 	[name, surname, id]
		// );
		// res.json(post.rows[0]);
		res.json({ message: 'UPDATE' });
	}

	async deletePost(req, res) {
		const id = req.params.id;
		const post = await db.query('DELETE FROM posts where id=$1', [id]);
		res.json(post.rows[0]);
	}

	async getPostByName(req, res) {
		const { fio, reason, sortBy } = req.query;
		let posts;

		if (!fio && !reason && !sortBy) {
			posts = await db.query('select * from posts');
		}
		if (fio && !reason && !sortBy) {
			posts = await db.query('select * from posts where FIO ilike $1', ['%' + fio + '%']);
		}
		if (fio && reason && !sortBy) {
			posts = await db.query(
				'select * from posts where reason ilike $1 AND FIO ilike $2',
				[['%' + reason + '%', '%' + fio + '%']]
			);
		}

		if (fio && !reason && sortBy) {
			posts = await db.query(
				'select * from posts where reason ilike $1 ORDER BY time_create ' + sortBy,
				['%' + fio + '%']
			);
		}

		if (!fio && !reason && sortBy) {
			posts = await db.query('select * from posts ORDER BY time_create ' + sortBy);
		}
		if (!fio && reason && sortBy) {
			posts = await db.query(
				'select * from posts where reason ilike $1 ORDER BY time_create ' + sortBy,
				['%' + reason + '%']
			);
		}

		if (fio && reason && sortBy) {
			posts = await db.query(
				'select * from posts where reason ilike $1 AND FIO ilike $2 ORDER BY time_create ' +
					sortBy,
				['%' + reason + '%', '%' + fio + '%']
			);
		}

		res.json(posts.rows);
	}
}

module.exports = new PostController();
