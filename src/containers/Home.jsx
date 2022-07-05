import React, { useContext, useEffect } from 'react';
import ListOfArticle from '../components/ListOfArticles/ListOfArticles';
import WrapTitle from '../components/WrapTitle/WrapTitle';
import AppContext from '../context/AppContext';
import ButtonUILg from '../components/UIComponents/ButtonUILg';
import { URL_TOPHEADLINES } from '../components/helpers/requester';
// import { data } from '../db';

const Home = () => {
	const { state, addToNews } = useContext(AppContext);
	const { country, news } = state;
	// const datafake = JSON.parse(data);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetch(
					`${URL_TOPHEADLINES}&country=${country}&page=1`
				);
				const result = await data.json();
				addToNews(result.articles);
			} catch (error) {}
		};
		fetchData().catch(console.error);
	}, [country]);

	const handleClick = () => {
		const fetchData = async () => {
			try {
				const data = await fetch(
					`${URL_TOPHEADLINES}&country=${country}&page=${2}`
				);
				const result = await data.json();
				addToNews(result.articles);
			} catch (error) {}
		};
		fetchData().catch(console.error);
	};

	return (
		<>
			<WrapTitle section='home' />
			<ListOfArticle news={news} />
			<div className='wrapButton'>
				<ButtonUILg handleClick={handleClick} />
			</div>
		</>
	);
};

export default Home;
