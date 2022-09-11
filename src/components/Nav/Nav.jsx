import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import style from './Nav.module.css';
// import Logo from './src/img/LogoAppClima.png';

function Nav({ onSearch }) {
	return (
		<>
			<nav>
				<div className={style.mainContainer}>
					<div className={style.containerLogo}>
						<a href='#'>
							<img
								className={style.logo}
								src='img/Inversure.png'
								alt='img not found'
							/>
						</a>

						<h4> ClimaApp </h4>
					</div>
					<div>
						<Link> About </Link>
						<SearchBar onSearch={onSearch} />
					</div>
				</div>
			</nav>
		</>
	);
}

export default Nav;
