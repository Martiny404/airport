import React from 'react';
import styles from './Search.module.scss';
import { FaSistrix } from 'react-icons/fa';
const Search = ({ search, setSearch }) => {
	return (
		<div className={styles.searchBlock}>
			<div className={styles.searchWrapper}>
				<input
					className={styles.search}
					value={search.search}
					onChange={(e) => setSearch((prev) => ({ ...prev, search: e.target.value }))}
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
				<option value=''>по умолчанию</option>
				<option value='date'>по дате</option>
				<option value='alphabet'>по алфавиту</option>
			</select>
		</div>
	);
};

export default Search;
