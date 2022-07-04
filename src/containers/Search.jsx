import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import WrapTitle from '../components/WrapTitle/WrapTitle';
import ListOfArticle from '../components/ListOfArticles/ListOfArticles';
import Searcher from '../components/Searcher/Searcher';
import ButtonUILg from '../components/UIComponents/ButtonUILg';
import './Container.css';

const Search = () => {
	const { state } = useContext(AppContext);
	const { news } = state;
	return (
		<>
			<Searcher />
			<WrapTitle section='search' />
			<ListOfArticle news={news} />
			<div className='wrapButton'>
				<ButtonUILg />
			</div>
		</>
	);
};

export default Search;
