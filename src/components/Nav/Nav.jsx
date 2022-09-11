import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import style from './Nav.module.css';
import logo from '../../img/LogoAppClima.png';

function Nav({ onSearch }) {
	return (
		<>
			<nav>
				<div className={style.mainContainer}>
					<div className={style.containerLogo}>
						<Link to='/' className={style.linkLogo}>
							<img className={style.logo} src={logo} alt='img not found' />
							<h2> App Climatic</h2>
						</Link>
					</div>
					<div className={style.containerSearchBar}>
						<Link to='/about' className={style.linkAbout}>
							About
						</Link>
						<SearchBar onSearch={onSearch} />
					</div>
				</div>
			</nav>
		</>
	);
}

export default Nav;
