import React, { useCallback, useRef, useState } from 'react';
import styles from './Search.module.scss';
import { FaTimes } from 'react-icons/fa';
import debounce from 'lodash.debounce';

const Search = ({ search, setSearch }) => {
	const [value, setValue] = useState('');

	const inputRef = useRef();

	const clearInputValue = () => {
		setValue('');
		setSearch((prev) => ({ ...prev, search: '' }));
		inputRef.current.focus();
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const updateInputSearchValue = useCallback(
		debounce((v) => {
			setSearch((prev) => ({ ...prev, search: v }));
		}, 500),
		[]
	);

	const updateAllValues = (v) => {
		setValue(v);
		updateInputSearchValue(v.toLowerCase());
	};

	return (
		<div className={styles.searchBlock}>
			<div className={styles.searchWrapper}>
				<input
					ref={inputRef}
					className={styles.search}
					value={value}
					onChange={(e) => updateAllValues(e.target.value)}
					type='text'
					placeholder='Поиск'
				/>
				<button onClick={clearInputValue}>
					<FaTimes />
				</button>
			</div>
			<select
				onChange={(e) => setSearch((prev) => ({ ...prev, query: e.target.value }))}
				value={search.query}
				className={styles.select}
			>
				<option value='DESC'>сначала новые</option>
				<option value='ASC'>сначала старые</option>
			</select>
		</div>
	);
};

export default Search;
