import React from 'react';
import Card from '../Card/Card.jsx';

function Cards({ cities, onClose }) {
	return (
		<>
			<div>
				{cities.map((city) => (
					<Card
						name={city.name}
						key={city.id}
						id={city.id}
						min={city.min}
						max={city.max}
						img={city.img}
					/>
				))}
			</div>
		</>
	);
}

export default Cards;
