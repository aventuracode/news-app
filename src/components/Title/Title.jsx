import React from 'react';
import './Title.css';
import { isMobile } from '../helpers/utils';
const Title = props => {
	const { title } = props;
	return <div>{isMobile() ? <h2>{title}</h2> : <h1>{title}</h1>}</div>;
};

export default Title;
