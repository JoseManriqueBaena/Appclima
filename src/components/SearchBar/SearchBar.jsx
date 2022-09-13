import React from 'react';
import { useState } from 'react';
import style from './SearchBar.module.css';

// function SearchBar({ onSearch }) {
// 	const [city, setCity] = useState('');

// 	const handlerChange = (event) => {
// 		setCity(event.target.value);
// 	};

// 	const handlerSubmit = (event) => {
// 		event.preventDefault();
// 		onSearch(city);
// 		setCity('');
// 	};
// 	return (
// 		<>
// 			<div>
// 				<form onSubmit={handlerSubmit}>
// 					<input
// 						className={style.input}
// 						type='text'
// 						name='ciudad'
// 						id='ciudad'
// 						value={city}
// 						placeholder='Busca una ciudad'
// 						onChange={handlerChange}
// 					/>
// 					<button className={style.button} type='submit'>
// 						Agregar ciudad
// 					</button>
// 				</form>
// 			</div>
// 		</>
// 	);
// }

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			city: '',
		};
	}
	handlerChange = (event) => {
		this.setState({ city: event.target.value });
	};

	handlerSubmit = (event) => {
		event.preventDefault();
		this.props.onSearch(this.state.city);
		this.setState({ city: '' });
		console.log(this.city);
	};
	render() {
		return (
			<>
				<div>
					<form onSubmit={this.handlerSubmit}>
						<input
							className={style.input}
							type='text'
							name='ciudad'
							id='ciudad'
							value={this.state.city}
							placeholder='Busca una ciudad'
							onChange={this.handlerChange}
						/>
						<button className={style.button} type='submit'>
							Agregar ciudad
						</button>
					</form>
				</div>
			</>
		);
	}
}

export default SearchBar;
