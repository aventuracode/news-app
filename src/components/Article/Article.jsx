import React from 'react';
import './Article.css';
import CardInfo from '../CardInfo/CardInfo';
const Article = props => {
	const { item } = { ...props };
	return (
		<div className='card-root'>
			<div className='card-wrap-image'>
				<img src={item.urlToImage} alt={item.urlToImage} />
			</div>

			<div className='card-content'>
				<h2 className='card-title'>{item.title}</h2>
				<p className='card-description'>{item.description}</p>
				<CardInfo item={item} />
			</div>
		</div>
	);
};

export default Article;
