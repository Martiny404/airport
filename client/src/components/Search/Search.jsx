import React from 'react';
import styles from './Search.module.scss';
import { FaSistrix } from 'react-icons/fa';

// import debounce from 'lodash.debounce';
const Search = ({ search, setSearch }) => {
	return (
		<div className={styles.searchBlock}>
			<div className={styles.searchWrapper}>
				<input
					className={styles.search}
					value={search.search}
					onChange={(e) => {}}
					type='text'
					placeholder='Поиск'
				/>
				<button>
					<FaSistrix />
				</button>
			</div>
			<select
				onChange={(e) => setSearch((prev) => ({ ...prev, query: e.target.value }))}
				value={search.query}
				className={styles.select}
			>
				<option value='DESC'>сначла новые</option>
				<option value='ASC'>сначала старые</option>
			</select>
		</div>
	);
};

export default Search;
