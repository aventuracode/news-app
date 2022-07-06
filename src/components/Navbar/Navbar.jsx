import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle('responsive_nav');
	};
	return (
		<div className='navbar'>
			<h2>Trending News</h2>
			<nav ref={navRef}>
				<Link to='/' onClick={showNavbar}>
					Últimas Noticias
				</Link>
				<Link to='search' onClick={showNavbar}>
					Buscar Noticias
				</Link>
				<button
					className='nav-btn nav-close-btn'
					onClick={showNavbar}
					type='button'
				>
					<FaTimes />
				</button>
			</nav>

			<button className='nav-btn' onClick={showNavbar} type='button'>
				<FaBars />
			</button>
		</div>
	);
};

export default Navbar;
