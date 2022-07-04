import React from 'react';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
const TextFielUI = () => {
	return (
		<Stack direction={'row'}>
			<TextField
				id='outlined-basic'
				variant='outlined'
				placeholder='Ingresar Termino'
				label='Buscar'
			/>
		</Stack>
	);
};

export default TextFielUI;
