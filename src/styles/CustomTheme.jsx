import { myPalette } from './Palette';
import { myTpography } from './Tpography';
import { myButtons } from './MuiButtons';

import {
    PaletteOptions,
    TypeBackground,
    createTheme,
    experimental_sx as sx,
} from '@mui/material/styles';

import { alpha } from '@mui/material/styles';
import { display, fontSize, fontWeight, padding, width } from '@mui/system';

// Supports weights 300-800
import '@fontsource-variable/open-sans';

// const { palette } = createTheme();

const theme = createTheme({
    // direction: 'rtl',
    palette: { ...myPalette },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 769,
            lg: 1024,
            xl: 1350,
        },
    },
    spacing: 10,
    typography: {
        ...myTpography,
    },

    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    position: 'relative',
                    padding: '0px!important',
                    width: 'min(1028px, 95%)',
                    background: 'white',
                },
            },
        },

        MuiButton: {
            styleOverrides: {
                ...myButtons,
                root: {
                    lineHeight: 1,
                    paddingBlock: '10px',
                },
            },
        },

        MuiInput: {
            styleOverrides: {
                root: {
                    minHeight: '37px!important',
                    // backgroundColor: 'transparent!important',
                },
            },
        },
    },
});

export default theme;
