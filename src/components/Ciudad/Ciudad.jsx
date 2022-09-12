import React from 'react';
import style from './Ciudad.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {} from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Ciudad({ city, history }) {
	function mostrar(valor) {
		console.log(valor);
	}
	mostrar(history.goBack);

	function handlerClick() {
		history.goBack();
	}

	return (
		<>
			<div className={style.mainContainer}>
				<div className={style.ciudadContainer}>
					<div className={style.buttonContainer}>
						<button className={style.button} onClick={handlerClick}>
							<FontAwesomeIcon icon={faArrowLeft} />
						</button>
					</div>
					<h3> {city.name} </h3>
					<div className={style.infoContainer}>
						<div>
							<p>Min</p>
							<p>{city.min}° </p>
						</div>
						<div>
							<p>Max</p>
							<p>{city.max}°</p>
						</div>
						<img
							src={`https://openweathermap.org/img/wn/${city.img}@2x.png`}
							alt='img not found'
						/>
					</div>
					<div className={style.infoContainer}>
						<div>
							<p>Latitud</p>
							<p>{city.lat} </p>
						</div>
						<div>
							<p>Longitud</p>
							<p>{city.lon} </p>
						</div>
					</div>
					<div className={style.infoContainer}>
						<div>
							<p>Nubes</p>
							<p>{city.clouds} </p>
						</div>
						<div>
							<p>Humedad</p>
							<p>{city.humid} </p>
						</div>
					</div>
					<div className={style.infoContainer}>
						<div>
							<p>Presión</p>
							<p>{city.pressure} </p>
						</div>
						<div>
							<p>Visibilidad</p>
							<p>{city.visibility} </p>
						</div>
					</div>
					<div className={style.infoContainer}>
						<div>
							<p>Tiempo</p>
							<p>{city.time} </p>
						</div>
						<div>
							<p>Viento</p>
							<p>{city.wind} </p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Ciudad;
