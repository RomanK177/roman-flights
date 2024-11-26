import { useState, useEffect, useRef } from 'react';
import { StyledSimpleInput } from '../styles/Inputs';
import { useSearchAirport } from '../services/FlightsService';

// Mui
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { Box, InputAdornment } from '@mui/material/';

// parts
import AirportResult from './AirportResult';

// Styled
import {
    AirportResultsWrapper,
    InputLoader,
} from '../styles/SearchBarStyledComponents';

// Types
import {
    AirPortSearchResultType,
    AirportInputProps,
} from '../types/search.flight.types';

// Context
import { useSearchContext } from '../contexts/SearchContext';

// Helper for debouncing
const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timer: NodeJS.Timeout;
    return (...args: any[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
};

function AirPortInput({ direction }: AirportInputProps) {
    const { searchParams, setSearchParams } = useSearchContext();
    const { handleSearchAirport, isLoading, isError, data, error } =
        useSearchAirport();

    const [search, setSearch] = useState<string>('');
    const [selectedLocation, setSelectedLocation] = useState<
        AirPortSearchResultType | undefined
    >(undefined);

    const [showResults, setShowResults] = useState<boolean>(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Debounce search updates
    const handleSearchChange = debounce((value: string) => {
        const res = handleSearchAirport(value);
        console.log('🚀 ~ handleSearchChange ~ res:', res);
    }, 300);

    useEffect(() => {
        setShowResults(false);
        setSearch(selectedLocation?.presentation.suggestionTitle);
        direction === 'to'
            ? setSearchParams({ ...searchParams, to: selectedLocation })
            : setSearchParams({ ...searchParams, from: selectedLocation });
    }, [selectedLocation]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node)
            ) {
                setShowResults(false);
                // Return to selected value
                setSearch(selectedLocation?.presentation.suggestionTitle);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Box ref={wrapperRef} sx={{ position: 'relative', flexGrow: 1 }}>
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
                placeholder={direction === 'from' ? 'Where from?' : 'Where to?'}
                onChange={(e) => {
                    setSearch(e.target.value);
                    handleSearchChange(e.target.value);
                    setShowResults(true);
                }}
                value={search}
            />
            {isLoading && <InputLoader />}
            {showResults && data?.data && data?.data?.length > 0 && (
                <AirportResultsWrapper spacing={1}>
                    {data.data.map(
                        (
                            airportSearchResult: AirPortSearchResultType,
                            idx: number,
                        ) => (
                            <AirportResult
                                key={idx}
                                res={airportSearchResult}
                                setSelectedLocation={setSelectedLocation}
                            />
                        ),
                    )}
                </AirportResultsWrapper>
            )}
        </Box>
    );
}

export default AirPortInput;
