import React from 'react';
import './CardInfo.css';
import moment from 'moment';

const CardInfo = props => {
	const { item } = { ...props };
	return (
		<div className='card-info'>
			<p className='card-date'>
				<span>{moment(item.publishedAt).format('L')}</span>
			</p>
			<a href={item.url}>Ver Más</a>
		</div>
	);
};

export default CardInfo;
