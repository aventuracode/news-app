import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext.js';
import ButtonUI from '../UIComponents/ButtonUI';
import { URL_SEARCH } from '../helpers/requester';
import { Formik } from 'formik';
import moment from 'moment';
import './Searcher.css';
import DatePicker from '../DatePicker/DatePicker';

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
	return (
		<div className='searcher-container'>
			<div className='searcher-form'>
				<Formik
					initialValues={initialValues()}
					onSubmit={(values, actions) => {
						const formatDate = 'YYYY-MM-DD';
						const fetchData = async () => {
							try {
								const data = await fetch(
									`${URL_SEARCH}q=${values.searchTerm}&from=${moment(
										values.dateFrom
									).format(formatDate)}&to=${moment(values.dateTo).format(
										formatDate
									)}&page=1`
								);
								const result = await data.json();
								addToNews(result.articles);
							} catch (error) {}
						};
						fetchData().catch(console.error);
						console.log(JSON.stringify(values, null, 2));
					}}
				>
					{props => (
						<form onSubmit={props.handleSubmit}>
							<DatePicker
								value={props.values.dateFrom}
								name='dateFrom'
								label='Fecha Desde'
							/>
							<DatePicker
								value={props.values.dateTo}
								name='dateTo'
								label='Fecha Hasta'
							/>
							<div className='wrap-searchTerm'>
								<label htmlFor='search'>palabras claves</label>
								<input
									id='search'
									type='text'
									onChange={props.handleChange}
									onBlur={props.handleBlur}
									value={props.values.name}
									name='searchTerm'
									placeholder='ingresar termino'
								/>
							</div>

							{props.errors.name && (
								<div id='feedback'>{props.errors.name}</div>
							)}

							<div>
								<ButtonUI type='submit' />
							</div>
						</form>
					)}
				</Formik>
			</div>
		</div>
	);
};

function initialValues() {
	return {
		dateFrom: new Date('07-1-2022'),
		dateTo: new Date('07-4-2022'),
		searchTerm: '',
	};
}
export default Searcher;
