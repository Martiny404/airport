import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './Singlepostpage.module.scss';
import { FaArrowAltCircleLeft, FaPen } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
const Singlepostpage = () => {
	const navigator = useNavigate();
	const [isModalOpened, setIsModalOpened] = useState(false);
	const { id: currentId } = useParams();
	const [currentPost, setCurrentPost] = useState(null);

	console.log(currentId);

	useEffect(() => {
		axios
			.get('http://localhost:8080/api/posts/' + currentId)
			.then((data) => setCurrentPost(data.data))
			.catch((e) => console.log(e));
	}, [currentId]);

	if (currentPost !== null) {
		return (
			<>
				<button className={styles.goback} onClick={() => navigator(-1)}>
					<FaArrowAltCircleLeft />
					<span>Назад</span>
				</button>
				<div className={styles.post}>
					<h2 className={styles.postTxt}>Причина поломки: {currentPost.reason}</h2>
					<span className={styles.postTxt}>Дата: {currentPost.date}</span>
					<span className={styles.postTxt}>
						Использованное оборудование: {currentPost.equipment}
					</span>
					<span className={styles.postTxt}>
						Категория проблемы: {currentPost.category}
					</span>
					<span className={styles.postTxt}>
						Принятые действия: {currentPost.measures_taken}
					</span>
					<span className={styles.postTxt}>Проблему решал: {currentPost.FIO}</span>
					<span className={styles.postTxt}>Примечание: {currentPost.note}</span>
					<button onClick={() => setIsModalOpened(true)} className={styles.postEdit}>
						<FaPen />
					</button>
				</div>
				{isModalOpened ? <Modal post={currentPost} setOpen={setIsModalOpened} /> : null}
			</>
		);
	} else {
		return <h1>Загрузка...</h1>;
	}
};

export default Singlepostpage;
