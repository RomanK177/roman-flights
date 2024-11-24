import React, { useState, useEffect } from 'react';
import { StyledSimpleInput } from '../styles/inputs';
import { useSearchAirport } from '../services/FlightsService';

// Mui
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { Box, Stack, InputAdornment } from '@mui/material/';

// parts
import AirportResult from './AirportResult';

// Types
import { AirPortSearchResultType } from '../types/searchFlightTypes';

// Helper for debouncing
const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timer: NodeJS.Timeout;
    return (...args: any[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
};
interface AirportInputProps {
    direction: string;
}

function AirPortInput({ direction }: AirportInputProps) {
    const [search, setSearch] = useState<string>('');
    const [selectedLocation, setSelectedLocation] = useState<
        AirPortSearchResultType | undefined
    >(undefined);
    const [debouncedSearch, setDebouncedSearch] = useState<string>('');
    const [showResults, setShowResults] = useState<boolean>(false);

    // Debounce search updates
    const handleSearchChange = debounce((value: string) => {
        setDebouncedSearch(value);
    }, 300);

    const { data, isLoading } = useSearchAirport(debouncedSearch);

    useEffect(() => {
        setShowResults(false);
        setSearch(selectedLocation?.presentation.suggestionTitle);
    }, [selectedLocation]);

    return (
        <Box>
            <StyledSimpleInput
                startAdornment={
                    <InputAdornment position="start">
                        {direction === 'from' ? (
                            <CircleOutlinedIcon />
                        ) : (
                            <FmdGoodOutlinedIcon />
                        )}
                    </InputAdornment>
                }
                placeholder="Where from?"
                onChange={(e) => {
                    setSearch(e.target.value);
                    handleSearchChange(e.target.value);
                    setShowResults(true);
                }}
                value={search}
            />
            {isLoading && <p>Loading...</p>}
            {showResults && data?.data && data?.data?.length > 0 && (
                <Stack spacing={1}>
                    {data.data.map(
                        (airportSearchResult: AirPortSearchResultType) => (
                            <AirportResult
                                key={airportSearchResult.id}
                                res={airportSearchResult}
                                setSelectedLocation={setSelectedLocation}
                            />
                        ),
                    )}
                </Stack>
            )}
        </Box>
    );
}

export default AirPortInput;
