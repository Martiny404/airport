import React, { useEffect, useMemo, useState } from 'react';
import styles from './Postpage.module.scss';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import Search from '../../components/Search/Search';
const initialSearch = { search: '', query: 'all' };

const Postspage = () => {
	const [search, setSearch] = useState(initialSearch);
	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		setLoading(true);
		//запросы
		setLoading(false);
	}, []);

	const sorted = useMemo(() => {
		switch (search.query) {
			case 'date':
				return [...posts].sort((a, b) => b.timestamp - a.timestamp);
			case 'alphabet':
				return [...posts].sort((a, b) => a.reason.localeCompare(b.reason));
			default:
				return posts;
		}
	}, [search.query, posts]);

	if (!posts.length) {
		return <h2>Список записей пуст!</h2>;
	}

	return (
		<>
			<h1 className={styles.postsTitle}>Страница всех записей</h1>
			<Search search={search} setSearch={setSearch} />
			{loading ? (
				<h2>Загрузка...</h2>
			) : (
				<ul className={styles.postList}>
					{sorted
						.filter((post) =>
							post.reason.toLowerCase().includes(search.search.toLowerCase())
						)
						.map((post, i) => (
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
