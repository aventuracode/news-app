import React from 'react';
import DatePickers from '../UIComponents/DatePickers';
import './Searcher.css';
import TextFielUI from '../UIComponents/TextFielUI';
import ButtonUI from '../UIComponents/ButtonUI';
const Searcher = () => {
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
					<ButtonUI />
				</div>
			</div>
		</div>
	);
};

export default Searcher;
