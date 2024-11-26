import { useEffect } from 'react';
import { useSearchFlights } from '../services/FlightsService';

// Toastify
import { toast } from 'react-toastify';

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
        const validations = [
            { condition: !searchParams.from, message: 'Select Where From!' },
            { condition: !searchParams.to, message: 'Select Where To!' },
            {
                condition: !searchParams.dates.start || !searchParams.dates.end,
                message: 'Select Dates!',
            },
        ];

        for (const validation of validations) {
            if (validation.condition) {
                toast(validation.message);
                return;
            }
        }

        handleSearchFlights(searchParams);
    };

    useEffect(() => {
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
                        translate: '-50% 150%',
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
