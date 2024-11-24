import React from 'react';

// Mui
import theme from '../styles/CustomTheme';
import { Box, Typography, Stack, Button, Container } from '@mui/material/';
import AirPortInput from './AirportInput';
import ChooseDates from './ChooseDates';

function SearchBar() {
    return (
        <Stack>
            <Stack direction="row">
                <AirPortInput direction="from" />
                <AirPortInput direction="to" />
                <ChooseDates />
            </Stack>
        </Stack>
    );
}

export default SearchBar;
