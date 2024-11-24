import { Input, Select } from '@mui/material';
import { palette, styled } from '@mui/system';

export const StyledSimpleInput = styled(Input)(({ theme: { palette } }) => ({
    backgroundColor: '#fff',
    border: '1px solid',
    borderColor: '#D9D9D9',
    borderRadius: '7.5px',
    '&:before': { content: 'unset' },
    '&:after': { content: 'unset' },
    px: 1,
    minHeight: '48px',
    paddingInline: '10px 0',
}));

export const StyledSimpleDropDown = styled(Select)(
    ({ theme: { palette } }) => ({
        backgroundColor: '#fff',
        border: '1px solid',
        borderColor: '#D9D9D9',
        borderRadius: '7.5px',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '21.79px',
        textAlign: 'start',
        color: '#434343',
        '& .MuiSelect-select': { paddingBlock: '7px' },
    }),
);
