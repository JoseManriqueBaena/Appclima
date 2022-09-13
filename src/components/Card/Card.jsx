import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';

class Card extends React.Component {
	constructor(props) {
		super(props);
	}

	handlerClick = (event) => {
		this.props.onClose(this.props.id);
	};

	render() {
		return (
			<>
				<div className={style.mainContainer}>
					<div className={style.cardContainer}>
						<div className={style.containerButton}>
							<button className={style.button} onClick={this.handlerClick}>
								x
							</button>
						</div>
						<Link to={`/ciudad/${this.props.id}`} className={style.linkName}>
							<h3> {this.props.name} </h3>
						</Link>
						<div className={style.infoContainer}>
							<div>
								<p>Min</p>
								<p>{this.props.min}° </p>
							</div>
							<div>
								<p>Max</p>
								<p>{this.props.max}°</p>
							</div>
							<img
								src={`https://openweathermap.org/img/wn/${this.props.img}@2x.png`}
								alt='img not found'
							/>
						</div>
					</div>
				</div>
			</>
		);
	}
}

// function Card({ name, min, max, img, onClose, id }) {
// const handlerClick = (event) => {
// 	onClose(id);
// };

// 	return (
// <>
// 	<div className={style.mainContainer}>
// 		<div className={style.cardContainer}>
// 			<div className={style.containerButton}>
// 				<button className={style.button} onClick={handlerClick}>
// 					x
// 				</button>
// 			</div>
// 			<Link to={`/ciudad/${id}`} className={style.linkName}>
// 				<h3> {name} </h3>
// 			</Link>
// 			<div className={style.infoContainer}>
// 				<div>
// 					<p>Min</p>
// 					<p>{min}° </p>
// 				</div>
// 				<div>
// 					<p>Max</p>
// 					<p>{max}°</p>
// 				</div>
// 				<img
// 					src={`https://openweathermap.org/img/wn/${img}@2x.png`}
// 					alt='img not found'
// 				/>
// 			</div>
// 		</div>
// 	</div>
// </>
// 	);
// }

export default Card;
