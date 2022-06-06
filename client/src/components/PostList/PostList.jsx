import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './PostList.module.scss';
import axios from 'axios';

const PostList = ({ search }) => {
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState([]);

	const deletePost = (id) => {
		axios
			.delete('http://localhost:8080/api/posts/' + id)
			.then(() => setPosts((prev) => prev.filter((post) => post.id !== id)));
	};

	useEffect(() => {
		setLoading(true);
		axios
			.get(
				`http://localhost:8080/api/posts/?fio=&reason=${search.search}&sortBy=${search.query}`
			)
			.then((response) => setPosts(response.data))
			.then(() => setLoading(false));
	}, [search.search, search.query]);

	if (loading) {
		return <h2>Загрузка...</h2>;
	}

	return (
		<>
			{!posts.length ? (
				<h2>Список записей пуст!</h2>
			) : (
				<ul className={styles.postList}>
					{posts.map((post, i) => (
						<li key={post.id}>
							<span>{i + 1}.</span>
							<Link to={`${post.id}`}>{post.reason}</Link>
							<button onClick={() => deletePost(post.id)}>
								<FaTrashAlt />
							</button>
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default PostList;
