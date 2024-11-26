import React from 'react';
import { DateRangePicker } from 'rsuite';
import moment from 'moment';
import type { DateRange } from 'rsuite/esm/DateRangePicker/types';
import 'rsuite/DateRangePicker/styles/index.css';

// Mui
import { Box, Stack, InputAdornment } from '@mui/material/';

// Context
import { useSearchContext } from '../contexts/SearchContext';

// Styled
import { ChooseDatesWrapper } from '../styles/SearchBarStyledComponents';

function ChooseDates() {
    const { searchParams, setSearchParams } = useSearchContext();

    function handleSelectDate(value: DateRange | null) {
        if (value) {
            const formattedStartDate = moment(value[0]).format('YYYY-MM-DD');
            const formattedEndDate = moment(value[1]).format('YYYY-MM-DD');
            setSearchParams({
                ...searchParams,
                dates: { start: formattedStartDate, end: formattedEndDate },
            });
        }
    }

    return (
        <ChooseDatesWrapper direction="row">
            <DateRangePicker
                format="MMM dd, yyyy"
                placeholder="Select Dates"
                showOneCalendar={window.innerWidth < 1410 ? true : false}
                onChange={(value: DateRange | null) => handleSelectDate(value)}
            />
        </ChooseDatesWrapper>
    );
}

export default ChooseDates;
