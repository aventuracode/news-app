import React from 'react';

import WrapTitle from '../components/WrapTitle/WrapTitle';
import ListOfArticle from '../components/ListOfArticles/ListOfArticles';
import Searcher from '../components/Searcher/Searcher';

const Search = () => {
	return (
		<>
			<Searcher />
			<WrapTitle section='search' />
			<div className='search-container'>
				<ListOfArticle />
			</div>
		</>
	);
};

export default Search;
