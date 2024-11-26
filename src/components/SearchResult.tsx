import moment from 'moment';

// Mui
import { Box, Typography, Stack } from '@mui/material/';

// Styled
import { SearchResultWrapper } from '../styles/SearchBarStyledComponents';

function SearchResult({ trip }: any) {
    return (
        <SearchResultWrapper
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            p={2}
        >
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
                {trip.legs.length &&
                    trip.legs.map((leg: any, idx: number) => {
                        return (
                            <Stack
                                className="leg"
                                direction="row"
                                alignItems="center"
                                spacing={2}
                                key={idx}
                            >
                                <Box
                                    component="img"
                                    src={leg.carriers.marketing[0].logoUrl}
                                    sx={{ width: '35px' }}
                                />
                                <Stack>
                                    <Typography>
                                        {leg.origin.city}(
                                        {leg.origin.displayCode}) -{' '}
                                        {leg.destination.city}(
                                        {leg.destination.displayCode})
                                    </Typography>
                                </Stack>
                                <Stack>
                                    <Typography>
                                        {moment(leg.departure).format('HH:mm')}{' '}
                                        - {moment(leg.arrival).format('HH:mm')}
                                    </Typography>
                                </Stack>
                            </Stack>
                        );
                    })}
            </Stack>
            <Typography>Price:{trip.price.formatted}</Typography>
        </SearchResultWrapper>
    );
}

export default SearchResult;
