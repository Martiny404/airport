import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import styles from '../HomePage/Homepage.module.scss';
import { useState } from 'react';
import axios from 'axios';

moment.locale('ru');
const defaultData = {
	date: '123123',
	equipment: '',
	category: '',
	reason: '',
	measures_taken: '',
	FIO: '',
	note: '',
	time_create: '00000',
};

const formFields = [
	{ placeholder: 'Оборудование', tag: 'input', field: 'equipment' },
	{
		placeholder: 'Вид неисправности',
		tag: 'select',
		field: 'category',
		options: ['', 'поломка', 'прогар', 'ошибка сети'],
	},
	{ placeholder: 'Причина неисправности', tag: 'text', field: 'reason' },
	{ placeholder: 'Принятые меры', tag: 'text', field: 'measures_taken' },
	{ placeholder: 'ФИО, кто устранял', tag: 'input', field: 'FIO' },
	{ placeholder: 'Примечание', tag: 'input', field: 'note' },
];

const Homepage = () => {
	const [data, setData] = useState(defaultData);

	const createPost = (e) => {
		e.preventDefault();
		for (const value of Object.values(data)) {
			if (value.length < 3) {
				alert('Количество символов в каждом поле должно быть больше трех!');
				return;
			}
		}
		axios
			.post('http://localhost:8080/api/posts', {
				...data,
				time_create: Date.now(),
				date: moment().format('llll'),
			})
			.then(() => setData(defaultData));
	};

	const changeInputs = (e) => {
		const field = e.target.name;
		setData((prev) => ({ ...prev, [field]: e.target.value }));
	};

	return (
		<div className={styles.home}>
			<div className={styles.formWrapper}>
				<h1>Создание записи</h1>
				<form onSubmit={createPost} className={styles.form}>
					{formFields.map((f) => (
						<label key={f.field}>
							<span>{f.placeholder}</span>
							{f.tag === 'select' ? (
								<select
									required
									name={f.field}
									onChange={changeInputs}
									value={data[f.field]}
								>
									{f.options.map((o) => (
										<option key={o} value={o}>
											{o}
										</option>
									))}
								</select>
							) : f.tag === 'input' ? (
								<input
									required
									onChange={changeInputs}
									name={f.field}
									type='text'
									value={data[f.field]}
								/>
							) : (
								<textarea
									resource=''
									onChange={changeInputs}
									name={f.field}
									value={data[f.field]}
								/>
							)}
						</label>
					))}
					<button>Создать запись</button>
				</form>
			</div>
		</div>
	);
};

export default Homepage;
