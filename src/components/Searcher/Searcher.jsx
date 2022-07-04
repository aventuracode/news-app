import React, { useContext, useEffect } from 'react';
import DatePickers from '../UIComponents/DatePickers';
import AppContext from '../../context/AppContext.js';
import TextFielUI from '../UIComponents/TextFielUI';
import ButtonUI from '../UIComponents/ButtonUI';
import { URL_SEARCH } from '../helpers/requester';
import './Searcher.css';

const Searcher = () => {
	const { addToNews } = useContext(AppContext);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetch(`${URL_SEARCH}q=bitcoin&page=1`);
				const result = await data.json();
				addToNews(result.articles);
			} catch (error) {}
		};
		fetchData().catch(console.error);
	}, []);

	const handleClick = () => {
		const fetchData = async () => {
			try {
				const data = await fetch(`${URL_SEARCH}q=economia&page=2`);
				const result = await data.json();
				addToNews(result.articles);
			} catch (error) {}
		};
		fetchData().catch(console.error);
	};

	return (
		<div className='searcher-container'>
			<div className='searcher-form'>
				<div>
					<DatePickers />
				</div>
				<div>
					<DatePickers />
				</div>
				<div>
					<TextFielUI />
				</div>
				<div>
					<ButtonUI handleClick={handleClick} />
				</div>
			</div>
		</div>
	);
};

export default Searcher;
