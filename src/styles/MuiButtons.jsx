import { borderRadius, fontWeight, textTransform, width } from '@mui/system';
import { myPalette } from './Palette';
import { alpha } from '@mui/material/styles';

export const myButtons = {
    mainButton: {
        background: '#2C2C2C',
        color: myPalette.my_white.main,
        borderRadius: '0',
        width: '100%',
        marginBlockStart: '16px',
        textTransform: 'capitalize',
        boxShadow: 'unset',
        border: '1px solid #767676',
        fontWeight: '300',
        '&:hover': {
            color: '#fff',
            background: myPalette.primary.main,
        },
        '&.Mui-disabled': {
            borderColor: '#B3B3B3',
        },
        '&.fit': {
            width: 'fit-content',
        },
    },

    containedYellow: {
        background: myPalette.yellow.main,
        color: myPalette.primary.main,
        borderRadius: '0',
        width: '100%',
        marginBlockStart: '16px',
        textTransform: 'capitalize',
        boxShadow: 'unset',
        border: '1px solid transparent',
        fontWeight: '700',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            color: '#fff',
            background: '#f4dc44',
            svg: {
                color: 'white',
            },
        },
        svg: {
            transition: 'all 0.3s ease-in-out',
            // color: myPalette.primary.main,
        },
        '&.Mui-disabled': {
            borderColor: '#B3B3B3',
        },
        '&.fit': {
            width: 'fit-content',
        },
    },

    containedWhite: {
        color: myPalette.primary.main,
        padding: '6px 16px',
        fontWeight: '700',
        borderRadius: '5px',
        backgroundColor: 'white',
        textTransform: 'capitalize',
        width: '100%',
        '&:hover': {
            backgroundColor: myPalette.primary.extra_light,

            color: myPalette.primary.dark,

            boxShadow: '0px 0px 10px 0px rgba(2, 37, 166, 0.45)',
        },
    },

    containedRed: {
        color: 'white',

        fontWeight: '700',

        backgroundColor: myPalette.secondary.main,

        '&:hover': {
            backgroundColor: myPalette.secondary.main,

            boxShadow: '0px 0px 10px 0px rgba(2, 37, 166, 0.45)',
        },
    },

    containedGray: {
        color: myPalette.primary.main,
        background: myPalette.background.main,
        border: `1px solid ${myPalette.border.main}`,
        textTransform: 'capitalize',
        paddingInline: '10px',
        '&:hover': {
            backgroundColor: myPalette.primary.light,
            boxShadow: '0px 0px 2px 0px rgba(2, 37, 166, 0.45)',
        },
    },

    containedLightBlue: {
        color: myPalette.primary.main,
        background: myPalette.background.dark,
        border: `1px solid ${myPalette.border.light}`,
        textTransform: 'capitalize',
        padding: '7px',
        fontWeight: 600,
        '&:hover': {
            backgroundColor: myPalette.primary.light,
            boxShadow: '0px 0px 2px 0px rgba(2, 37, 166, 0.45)',
        },
    },
    containedLighterBlue: {
        color: myPalette.primary.main,
        background: myPalette.background.main,
        border: `1px solid ${myPalette.border.light}`,
        textTransform: 'capitalize',
        padding: '7px',
        fontWeight: 600,
        '&:hover': {
            backgroundColor: myPalette.primary.light,
            boxShadow: '0px 0px 2px 0px rgba(2, 37, 166, 0.45)',
        },
    },
    transparentBlue: {
        color: myPalette.blue.main,
        background: 'transparent',
        border: `1px solid transparent`,
        textTransform: 'capitalize',
        padding: '7px',
        fontWeight: 700,
        '&:hover': {
            // backgroundColor: myPalette.primary.light,
            boxShadow: '0px 0px 2px 0px rgba(2, 37, 166, 0.45)',
        },
    },
    outlineLight: {
        color: myPalette.primary.main,
        border: `1px solid #E6E6E6`,
        backgroundColor: 'transparent',
        textTransform: 'capitalize',
    },

    outlineBlue: {
        color: myPalette.primary.main,

        fontWeight: '700',

        border: `1px solid ${myPalette.primary.main}`,

        backgroundColor: 'transparent',
    },
};
