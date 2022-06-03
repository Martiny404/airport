import React from 'react';
import styles from './Layout.module.scss';
import { NavLink } from 'react-router-dom';

import { FaPlane } from 'react-icons/fa';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<FaPlane className={styles.logoIcon} />
				<span>Челябинский Аэропорт им. Курчатова</span>
			</div>
			<ul className={styles.linksList}>
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
