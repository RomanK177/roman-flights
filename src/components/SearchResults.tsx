import React from 'react';

// Mui
import theme from '../styles/CustomTheme';
import { Box, Typography, Stack, Button, Container } from '@mui/material/';

// Context
import { useSearchContext } from '../contexts/SearchContext';
import SearchResult from './SearchResult';

function SearchResults() {
    const { flightResults } = useSearchContext();
    console.log('🚀 ~ SearchResults ~ flightResults:', flightResults);

    return (
        <Box mt={3} sx={{ width: '100%' }}>
            {(flightResults?.data?.context?.status === 'failure' ||
                flightResults?.data?.itineraries?.length === 0) && (
                <Typography>No Flights Found</Typography>
            )}

            {flightResults?.data?.itineraries?.length > 0 && (
                <>
                    <Typography mb={2} variant="h4">
                        Flights Found:
                    </Typography>
                    <Stack spacing={2}>
                        {flightResults.data.itineraries.map((trip: any) => (
                            <SearchResult key={trip.id} trip={trip} />
                        ))}
                    </Stack>
                </>
            )}
        </Box>
    );
}

export default SearchResults;
