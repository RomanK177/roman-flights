import React from 'react';

// Mui
import theme from '../styles/CustomTheme';
import { Box, Typography, Stack, Button, Container } from '@mui/material/';

function HomepageHero() {
    return (
        <Box
            sx={{
                backgroundImage:
                    'url(https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_4.svg)',
                width: '100%',
                aspectRatio: 4.2,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                position: 'relative',
            }}
        >
            <Typography
                variant="h1"
                component="h1"
                align="center"
                sx={{ position: 'absolute', width: '100%', bottom: 0 }}
            >
                Roman Flights
            </Typography>
        </Box>
    );
}

export default HomepageHero;
