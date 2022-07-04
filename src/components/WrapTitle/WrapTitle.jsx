import React from 'react';
import Title from '../Title/Title';
import SelectUI from '../UIComponents/SelectUI';
import './WrapTitle.css';
const WrapTitle = props => {
	const { section } = props;
	return section === 'home' ? (
		<div className='wrap-title home-title'>
			<Title title='Ultimas Noticias' />
			<SelectUI />
		</div>
	) : (
		<div className='wrap-title'>
			<Title title='Resultados de Busqueda' />
		</div>
	);
};

export default WrapTitle;
