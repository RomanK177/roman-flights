import {
    borderRadius,
    fontWeight,
    minWidth,
    textTransform,
    width,
} from '@mui/system';
import { myPalette } from './Palette';
import { alpha } from '@mui/material/styles';

export const myButtons = {
    containedBlue: {
        color: 'white',
        width: 'fit-content',
        borderRadius: '100vw',
        background: myPalette.blue.main,
        border: `1px solid ${myPalette.border.light}`,
        textTransform: 'capitalize',
        padding: '7px 10px',
        fontWeight: 600,
        '&:hover': {
            backgroundColor: myPalette.blue.dark,
            boxShadow: '0px 0px 2px 0px rgba(2, 37, 166, 0.45)',
        },
    },
    containedLightBlue: {
        color: myPalette.blue.main,
        width: 'fit-content',
        borderRadius: '5px',
        background: myPalette.blue.light,
        border: `1px solid transparent`,
        textTransform: 'capitalize',
        padding: '7px',
        fontWeight: 600,
        minWidth: '15px',
        '&:hover': {
            boxShadow: '0px 0px 2px 0px rgba(2, 37, 166, 0.45)',
        },
    },
    myDisabled: {
        pointerEvents: 'none',
        color: 'gray',
        width: 'fit-content',
        borderRadius: '5px',
        background: myPalette.border.main,
        border: `1px solid transparent`,
        textTransform: 'capitalize',
        padding: '7px',
        fontWeight: 700,
        minWidth: '15px!important',
        '&:hover': {
            backgroundColor: myPalette.blue.dark,
            boxShadow: '0px 0px 2px 0px rgba(2, 37, 166, 0.45)',
        },
    },
};
