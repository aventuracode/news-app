import React from 'react';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';

const TextFielUI = props => {
	const { value, handleChange } = props;
	console.log(props);
	return (
		<Stack direction={'row'}>
			<TextField
				id='outlined-basic'
				variant='outlined'
				placeholder='Ingresar Termino'
				label='Buscar'
				value={value}
				onChange={handleChange}
			/>
		</Stack>
	);
};

export default TextFielUI;
