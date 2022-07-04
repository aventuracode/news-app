/*import { useState, useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';

import { URL_API, TOPHEADLINES, APIKEY } from '../../helpers/requester.js';

const useGetNews =(country) =>{
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

}
export default useGetNews;*/
