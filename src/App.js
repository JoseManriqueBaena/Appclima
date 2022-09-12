import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About';
import { Route } from 'react-router-dom';
import Ciudad from './components/Ciudad/Ciudad';

const apiKey = '5583105fae6e2ab6b0ea87705841d6d2';

function App() {
	const [cities, setCities] = useState([]);

	function onSearch(ciudad) {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
			)
			.then(function (response) {
				const ciudad = {
					name: response.data.name,
					id: response.data.id,
					min: Math.round(response.data.main.temp_min),
					max: Math.round(response.data.main.temp_max),
					img: response.data.weather[0].icon,
					lat: response.data.coord.lat,
					lon: response.data.coord.lon,
					clouds: response.data.clouds.all,
					humid: response.data.main.humidity,
					pressure: response.data.main.pressure,
					visibility: response.data.visibility,
					time: response.data.timezone,
					wind: response.data.wind.speed,
				};
				if (cities.find((city) => city.id === ciudad.id)) {
					alert('La ciudad ya fue agregada');
				} else {
					setCities((oldCities) => [...oldCities, ciudad]);
					console.log(response.data);
				}
			})
			.catch(function (error) {
				alert('No existe la ciudad');
			});
	}

	function onClose(id) {
		setCities(cities.filter((city) => city.id !== id));
	}

	function onFilter(id) {
		const city = cities.filter((city) => city.id === parseInt(id));
		if (city.length) {
			return city[0];
		} else {
			return null;
		}
	}

	return (
		<>
			<div className='App'>
				<Nav onSearch={onSearch} />
				<Route
					exact
					path='/'
					render={(history, match) => (
						<Cards cities={cities} onClose={onClose} />
					)}
				/>
				<Route exact path='/about'>
					<About />
				</Route>
				<Route
					path='/ciudad/:ciudadId'
					render={({ match, history }) => (
						<Ciudad history={history} city={onFilter(match.params.ciudadId)} />
					)}
				/>
			</div>
		</>
	);
}

export default App;
