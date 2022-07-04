import React from 'react';
import Article from '../Article/Article.jsx';

import './ListOfArticles.css';

const ListOfArticle = ({ news }) => {
	return (
		<>
			<div className='container-articles'>
				{news !== undefined &&
					news.map(item => (
						<div key={item.url}>
							<Article item={item} />
						</div>
					))}
			</div>
		</>
	);
};

export default ListOfArticle;
