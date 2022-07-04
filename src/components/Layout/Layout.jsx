import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = ({ children }) => (
	<div className='Main'>
		<Navbar />
		{children}
		<Footer />
	</div>
);

export default Layout;
