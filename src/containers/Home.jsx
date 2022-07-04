import React from 'react';
import ListOfArticle from '../components/ListOfArticles/ListOfArticles';
import WrapTitle from '../components/WrapTitle/WrapTitle';
const Home = () => {
	return (
		<>
			<WrapTitle section='home' />
			<ListOfArticle />
		</>
	);
};

export default Home;
