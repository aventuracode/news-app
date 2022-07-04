import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ButtonUILg = () => {
	return (
		<Stack spacing={2} direction='row'>
			<Button variant='contained' sx={{ width: 300 }}>
				Ver Más
			</Button>
		</Stack>
	);
};

export default ButtonUILg;
