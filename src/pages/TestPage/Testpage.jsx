import axios from 'axios';
import React, { useState } from 'react';

const defaultData = {
	surname: '',
	name: '',
	time_create: 0,
};

const Testpage = () => {
	const [data, setData] = useState(defaultData);

	const sendData = (e) => {
		e.preventDefault();
		const person = { ...data, time_create: Date.now() };
		axios
			.post('http://localhost:8080/api/user/', person)
			.then(() => setData(defaultData));
	};

	return (
		<form onSubmit={sendData}>
			<input
				onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
				value={data.name}
				type='text'
				placeholder='name'
			/>
			<input
				onChange={(e) => setData((prev) => ({ ...prev, surname: e.target.value }))}
				value={data.surname}
				type='text'
				placeholder='surname'
			/>
			<button>send</button>
		</form>
	);
};

export default Testpage;
