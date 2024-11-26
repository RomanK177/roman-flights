import React from 'react';

// Mui
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { Box, Stack, InputAdornment, Typography } from '@mui/material/';
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

// Types
import { AirPortSearchResultType } from '../types/search.flight.types';

interface AirportResultProps {
    res: AirPortSearchResultType;
    setSelectedLocation: React.Dispatch<
        React.SetStateAction<AirPortSearchResultType | undefined>
    >;
}

function AirportResult({ res, setSelectedLocation }: AirportResultProps) {
    // console.log('🚀 ~ AirportResult ~ res:', res);
    return (
        <>
            {res.navigation.entityType === 'AIRPORT' && (
                <Stack
                    spacing={1}
                    p={1}
                    direction="row"
                    alignItems="center"
                    onClick={() => setSelectedLocation(res)}
                    sx={{ cursor: 'pointer' }}
                >
                    <AirplanemodeActiveOutlinedIcon />

                    <Stack alignItems="start">
                        <Typography>
                            {res.presentation.suggestionTitle}
                        </Typography>
                        <Typography>{res.presentation.subtitle}</Typography>
                    </Stack>
                </Stack>
            )}
        </>
    );
}

export default AirportResult;
