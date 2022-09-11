import React from 'react';
import Card from '../Card/Card.jsx';
import style from './Cards.module.css';

function Cards({ cities, onClose }) {
	return (
		<>
			<div className={style.mainContainer}>
				{cities.map((city) => (
					<Card
						name={city.name}
						key={city.id}
						id={city.id}
						min={city.min}
						max={city.max}
						img={city.img}
						onClose={onClose}
					/>
				))}
			</div>
		</>
	);
}

export default Cards;
