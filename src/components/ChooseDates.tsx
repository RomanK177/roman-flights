import React from 'react';
import { DateRangePicker } from 'rsuite';
import 'rsuite/DateRangePicker/styles/index.css';

// Mui
import { Box, Stack, InputAdornment } from '@mui/material/';

function ChooseDates() {
    function handleSelectDate(e: any) {
        console.log('🚀 ~ handleSelectDate ~ e:', e);
    }

    return (
        <Stack direction="row">
            <DateRangePicker
                format="MMM dd, yyyy"
                onChange={handleSelectDate}
            />
        </Stack>
    );
}

export default ChooseDates;
