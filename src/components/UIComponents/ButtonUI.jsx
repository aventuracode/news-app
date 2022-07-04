import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';

const ButtonUI = () => {
	return (
		<Stack direction='row' spacing={2}>
			<Button variant='contained' endIcon={<SearchIcon />}>
				Buscar
			</Button>
		</Stack>
	);
};

export default ButtonUI;
