import { useEffect } from 'react';
import { useSearchFlights } from '../services/FlightsService';

// Mui
import { Stack } from '@mui/material/';
import AirPortInput from './AirportInput';
import ChooseDates from './ChooseDates';
import CircularProgress from '@mui/material/CircularProgress';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

// Context
import { useSearchContext } from '../contexts/SearchContext';

// Styled
import {
    SearchButton,
    SearchBarWrapper,
} from '../styles/SearchBarStyledComponents';
import SearchBarFilters from './SearchBarFilters';

function SearchBar() {
    const { searchParams, setFlightResults } = useSearchContext();
    const { handleSearchFlights, isLoading, data } = useSearchFlights();

    const handleSearch = () => {
        handleSearchFlights(searchParams);
    };

    useEffect(() => {
        console.log('🚀 ~ useEffect ~ data:', data);
        setFlightResults({ ...data }); // Store the results in the context
    }, [data]);

    return (
        <SearchBarWrapper p={2} pb={5} mt="min(50px,5vw)">
            <SearchBarFilters />
            <Stack direction="row" spacing={2} flexWrap={'wrap'} useFlexGap>
                <AirPortInput direction="from" />
                <AirPortInput direction="to" />

                <ChooseDates />
            </Stack>
            {isLoading ? (
                <CircularProgress
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translate(-50%,50%)',
                    }}
                />
            ) : (
                <SearchButton variant="containedBlue" onClick={handleSearch}>
                    <SearchOutlinedIcon />
                    Search
                </SearchButton>
            )}
        </SearchBarWrapper>
    );
}

export default SearchBar;
