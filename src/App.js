import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';

const apiKey = '5583105fae6e2ab6b0ea87705841d6d2';

function App() {
	const [cities, setCities] = useState([]);

	function onSearch(ciudad) {
		axios
			.get(
				`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
			)
			.then(function (response) {
				const ciudad = {
					name: response.data.name,
					id: response.data.id,
					min: response.data.main.temp_min,
					max: response.data.main.temp_min,
					img: response.data.weather[0].icon,
				};
				setCities((oldCities) => [...oldCities, ciudad]);
			})
			.catch(function (error) {
				alert('No existe la ciudad');
			});
	}

	function onClose() {
		return 'holi';
	}

	return (
		<>
			<div className='App'>
				<Nav onSearch={onSearch} />
				<Cards cities={cities} onClose={onClose} />
			</div>
		</>
	);
}

export default App;
