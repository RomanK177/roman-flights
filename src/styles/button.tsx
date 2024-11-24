import { Button } from '@mui/material';
import { borderColor, palette, styled } from '@mui/system';

export const StyledSimpleButton = styled(Button)(({ theme: { palette } }) => ({
    background: '#2C2C2C',
    color: '#1E1E1E',
    borderRadius: '7.5px',
    width: '100%',
    marginBlockStart: '16px',
    textTransform: 'capitalize',
    boxShadow: 'unset',
    border: '1px solid #767676',

    '&:hover': {
        color: '#fff',
    },
    '&.Mui-disabled': {
        borderColor: '#B3B3B3',
    },
}));
