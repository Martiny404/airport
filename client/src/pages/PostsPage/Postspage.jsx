import React, { useEffect, useState } from 'react';
import styles from './Postpage.module.scss';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import Search from '../../components/Search/Search';
import axios from 'axios';
const initialSearch = { search: '', query: 'DESC' };

const Postspage = () => {
	const [search, setSearch] = useState(initialSearch);
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		setLoading(true);
		axios
			.get(
				`http://localhost:8080/api/posts/?fio=${search.search}&reason=&sortBy=${search.query}`
			)
			.then((response) => setPosts(response.data))
			.then(() => setLoading(false));
	}, [search.search, search.query]);

	if (loading) {
		return <h2>Загрузка...</h2>;
	}

	return (
		<>
			<h1 className={styles.postsTitle}>Страница всех записей</h1>
			<Search search={search} setSearch={setSearch} />
			{!posts.length ? (
				<h2>Список записей пуст!</h2>
			) : (
				<ul className={styles.postList}>
					{posts.map((post, i) => (
						<li key={post.id}>
							<span>{i + 1}.</span>
							<Link to={`${post.id}`}>{post.reason}</Link>
							<button onClick={() => {}}>
								<FaTrashAlt />
							</button>
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default Postspage;
