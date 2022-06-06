import React, { useState } from 'react';
import styles from './Layout.module.scss';
import { NavLink } from 'react-router-dom';

import { FaPlane, FaTimes, FaThList } from 'react-icons/fa';

const Header = () => {
	const [mobile, setMobile] = useState(true);

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<FaPlane className={styles.logoIcon} />
				<span>Челябинский Аэропорт им. Курчатова</span>
			</div>
			<div className={styles.burger}>
				<button onClick={() => setMobile((prev) => !prev)}>
					{!mobile ? <FaTimes /> : <FaThList />}
				</button>
			</div>

			<ul className={`${styles.linksList} ${mobile === true ? styles.mobile : ''}`}>
				<li>
					<NavLink className='link' to='/'>
						Домашняя страница
					</NavLink>
				</li>
				<li>
					<NavLink className='link' to='posts'>
						Записи
					</NavLink>
				</li>
			</ul>
		</header>
	);
};

export default Header;
