import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ButtonUILg = ({ handleClick }) => {
	return (
		<Stack spacing={2} direction='row'>
			<Button onClick={handleClick} variant='contained' sx={{ width: 300 }}>
				Ver Más
			</Button>
		</Stack>
	);
};

export default ButtonUILg;
