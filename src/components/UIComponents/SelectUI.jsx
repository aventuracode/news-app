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
		<FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
			<InputLabel id='demo-select-small'>Pais</InputLabel>
			<Select
				labelId='demo-select-small'
				id='demo-select-small'
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
	);
}
