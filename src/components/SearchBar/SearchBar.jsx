import React from 'react';
import { useState } from 'react';

function SearchBar({ onSearch }) {
	const [city, setCity] = useState('');

	const handlerChange = (event) => {
		setCity(event.target.value);
	};

	const handlerSubmit = (event) => {
		event.preventDefault();
		onSearch(city);
		setCity('');
	};
	return (
		<>
			<div>
				<form onSubmit={handlerSubmit}>
					<input
						type='text'
						name='ciudad'
						id='ciudad'
						value={city}
						placeholder='Busca la ciudad'
						onChange={handlerChange}
					/>
					<button type='submit'> Agregar ciudad</button>
				</form>
			</div>
		</>
	);
}

export default SearchBar;
