import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.scss';
const Layout = () => {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default Layout;
