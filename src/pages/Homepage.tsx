import React from 'react';

import { useGetFlights } from '../services/FlightsService';
import HomepageHero from '../components/HomepageHero';

// Mui
import theme from '../styles/CustomTheme';
import { Box, Typography, Stack, Button, Container } from '@mui/material/';
import SearchBar from '../components/SearchBar';

function Homepage() {
    const { data, isLoading } = useGetFlights();

    return (
        <div>
            <Container>
                <HomepageHero />
                <SearchBar />
            </Container>
        </div>
    );
}

export default Homepage;
