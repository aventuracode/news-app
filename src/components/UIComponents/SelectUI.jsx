import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AppContext from '../../context/AppContext';

export default function SelectUI() {
	const { state, addCountry } = useContext(AppContext);
	const { country, codeCountries } = state;
	const handleChange = event => {
		addCountry(event.target.value);
	};

	return (
		<Box sx={{ minWidth: 120, maxHeight: 100 }}>
			<FormControl fullWidth sx={{ maxHeight: 100 }}>
				<InputLabel id='demo-simple-select-label'>Pais</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={country}
					label='Pais'
					onChange={handleChange}
				>
					{codeCountries !== undefined &&
						codeCountries.map(item => (
							<MenuItem key={item} value={item}>
								{item}
							</MenuItem>
						))}
				</Select>
			</FormControl>
		</Box>
	);
}
