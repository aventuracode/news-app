import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { isMobile } from '../helpers/utils';

const DatePickers = props => {
	// const [value, setValue] = React.useState(new Date('2022-07-1T21:11:54'));
	const { value, handleChange } = props;

	/* const handleChange = newValue => {
		setValue(newValue);
	};
*/
	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<Stack spacing={3}>
				{isMobile() ? (
					<MobileDatePicker
						label='Fecha'
						inputFormat='MM/dd/yyyy'
						value={value}
						onChange={handleChange}
						renderInput={params => <TextField {...params} />}
					/>
				) : (
					<DesktopDatePicker
						label='Fecha'
						inputFormat='MM/dd/yyyy'
						value={value}
						onChange={handleChange}
						renderInput={params => <TextField {...params} />}
					/>
				)}
			</Stack>
		</LocalizationProvider>
	);
};

export default DatePickers;
