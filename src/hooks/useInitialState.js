import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToNews = payload => {
		setState({
			...state,
			news: payload,
		});
	};

	const addCountry = payload => {
		setState({
			...state,
			country: payload,
		});
	};

	const addDateFrom = payload => {
		setState({
			...state,
			dateFrom: payload,
		});
	};
	const addDateTo = payload => {
		setState({
			...state,
			dateTo: payload,
		});
	};
	const addSearchTerm = payload => {
		setState({
			...state,
			searchTerm: payload,
		});
	};
	const setLoading = payload => {
		setState({
			...state,
			loading: payload,
		});
	};
	const setError = payload => {
		setState({
			...state,
			error: payload,
		});
	};

	const value = {
		state,
		addToNews,
		addCountry,
		addDateFrom,
		addDateTo,
		addSearchTerm,
		setLoading,
		setError,
	};
	return value;
};

export default useInitialState;
