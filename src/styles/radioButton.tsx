import { FormControlLabel, Radio } from '@mui/material';
import { fontSize, palette, styled } from '@mui/system';

export const StyledSimpleRadioButton = styled(FormControlLabel)(
    ({ theme: { palette } }) => ({
        '& .MuiFormControlLabel-label': {
            marginInlineEnd: 'auto',
            fontSize: '14px',
        },
    }),
);
