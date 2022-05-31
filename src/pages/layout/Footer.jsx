import React from 'react';
import styles from './Layout.module.scss';
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<span>&copy; {new Date().getFullYear()}</span>
		</footer>
	);
};

export default Footer;
