import React, { useState } from 'react';
import styles from './Modal.module.scss';
import { BiCheck, BiWindowClose } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Modal = ({ setOpen, post }) => {
	const navigator = useNavigate();
	const [newData, setNewData] = useState('');
	const editPost = (e) => {
		e.preventDefault();
		axios
			.put('http://localhost:8080/api/posts', {
				...post,
				reason: newData,
			})
			.then(() => navigator(0));
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
						placeholder='причина'
						value={newData}
						onChange={(e) => setNewData(e.target.value)}
						className={styles.editField}
						type='text'
					/>
					{/* <input placeholder='Категория' className={styles.editField} type='text' />
					<input
						placeholder='Принятые действия'
						className={styles.editField}
						type='text'
					/>
					<input placeholder='Проблему решал:' className={styles.editField} type='text' />
					<input placeholder='Примечание' className={styles.editField} type='text' /> */}

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
