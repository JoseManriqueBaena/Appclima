import React from 'react';

function Card({ name, min, max, img, onClose, id }) {
	return (
		<>
			<div>
				<button onClick={onClose}> x </button>
				<h3> {name} </h3>
				<div>
					<div>
						<p>Min</p>
						<p>{min}</p>
					</div>
					<div>
						<p>Max</p>
						<p>{max}</p>
					</div>
					<img
						src={`https://openweathermap.org/img/wn/${img}@2x.png`}
						alt='img not found'
					/>
				</div>
			</div>
		</>
	);
}

export default Card;
