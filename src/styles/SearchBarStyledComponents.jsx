import { Button, Stack, CircularProgress } from '@mui/material';
import { palette, styled } from '@mui/system';

export const AirportResultsWrapper = styled(Stack)(
    ({ theme: { palette } }) => ({
        position: 'absolute',
        zIndex: 2,
        top: '110%',
        left: '0',
        background: 'white',
        width: '100%',
        border: '1px solid #D9D9D9',
        borderRadius: '7.5px',
        maxHeight: '350px',
        overflow: 'auto',
    }),
);
export const SearchBarWrapper = styled(Stack)(({ theme: { palette } }) => ({
    position: 'relative',
    width: '100%',
    borderRadius: '10px',
    boxShadow:
        '0 1px 3px 0 rgba(60, 64, 67, .3), 0 4px 8px 3px rgba(60, 64, 67, .15)',
}));
export const SearchResultWrapper = styled(Stack)(({ theme: { palette } }) => ({
    width: '100%',
    border: `1px solid ${palette.border.main}`,
    borderRadius: '5px',
}));
export const ChooseDatesWrapper = styled(Stack)(({ theme: { palette } }) => ({
    flexGrow: 1,
    '.rs-picker': { width: '100%' },
    '.rs-picker-input-group': { height: '100%' },
    '.rs-icon': { height: '25px', width: '25px' },
}));
export const InputLoader = styled(CircularProgress)(
    ({ theme: { palette } }) => ({
        position: 'absolute',
        zIndex: 2,
        top: '10%',
        right: '5%',
    }),
);

export const SearchButton = styled(Button)(({ theme: { palette } }) => ({
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%,50%)',
}));
