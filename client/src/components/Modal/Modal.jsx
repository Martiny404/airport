import React, { useState } from 'react';
import styles from './Modal.module.scss';
import { BiCheck, BiWindowClose } from 'react-icons/bi';

const Modal = ({ setOpen }) => {
	const [newData, setNewData] = useState('');
	const editPost = (e) => {
		e.preventDefault();
		console.log('edited');
	};

	return (
		<div className={styles.overlay}>
			<div onClick={(e) => e.stopPropagation()} className={styles.edit}>
				<h2>Редактирование записи.</h2>
				<button onClick={() => setOpen(false)} className={styles.editClose}>
					<BiWindowClose />
				</button>
				<form className={styles.editForm} onSubmit={editPost}>
					<input
						value={newData}
						onChange={(e) => setNewData(e.target.value)}
						className={styles.editField}
						type='text'
					/>
					<input className={styles.editField} type='text' />
					<input className={styles.editField} type='text' />
					<input className={styles.editField} type='text' />
					<input className={styles.editField} type='text' />

					<button className={styles.editBtn}>
						<span>Закончить редактирование</span>
						<b>
							<BiCheck />
						</b>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Modal;
