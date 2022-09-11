import React from 'react';
import style from './Card.module.css';

function Card({ name, min, max, img, onClose, id }) {
	const handlerClick = (event) => {
		onClose(id);
	};

	return (
		<>
			<div className={style.mainContainer}>
				<div className={style.cardContainer}>
					<div className={style.containerButton}>
						<button className={style.button} onClick={handlerClick}>
							x
						</button>
					</div>
					<h3> {name} </h3>
					<div className={style.infoContainer}>
						<div>
							<p>Min</p>
							<p>{min}° </p>
						</div>
						<div>
							<p>Max</p>
							<p>{max}°</p>
						</div>
						<img
							src={`https://openweathermap.org/img/wn/${img}@2x.png`}
							alt='img not found'
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
