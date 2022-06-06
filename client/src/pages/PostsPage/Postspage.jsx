import React, { useState } from 'react';
import styles from './PostPage.module.scss';

import PostList from '../../components/PostList/PostList';
import Search from '../../components/Search/Search';

const initialSearch = { search: '', query: 'DESC' };

const Postspage = () => {
	const [search, setSearch] = useState(initialSearch);

	return (
		<>
			<h1 className={styles.postsTitle}>Страница всех записей</h1>
			<Search search={search} setSearch={setSearch} />
			<PostList search={search} />
		</>
	);
};

export default Postspage;
