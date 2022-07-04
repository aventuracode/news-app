import React, { useEffect, useState, useContext } from 'react';
import Article from '../Article/Article.jsx';
import AppContext from '../../context/AppContext.js';
import { URL_API, TOPHEADLINES, APIKEY } from '../../helpers/requester';
import './ListOfArticles.css';

const ListOfArticle = () => {
	const { state } = useContext(AppContext);
	const { country } = state;
	const [news, setNews] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetch(
					`${URL_API}${TOPHEADLINES}${country}&${APIKEY}`
				);
				const result = await data.json();
				setNews(result.articles);
			} catch (error) {}
		};
		fetchData().catch(console.error);
	}, [country]);

	return (
		<div className='container-articles'>
			{news !== undefined &&
				news.map(item => (
					<div key={item.title}>
						<Article item={item} />
					</div>
				))}
		</div>
	);
};

export default ListOfArticle;
