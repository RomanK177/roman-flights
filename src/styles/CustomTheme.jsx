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

        MuiAccordion: {
            styleOverrides: {
                root: {
                    //   background: myPalette.secondary.dark,

                    margin: '0 !important',

                    borderRadius: '100vw !important',

                    '&::before': {
                        content: 'unset',
                    },

                    '&.Mui-expanded': {
                        // backgroundColor: 'pink !important',

                        borderRadius: '40px!important',

                        // padding: '25px 12px !important',

                        '.MuiAccordionSummary-expandIconWrapper': {
                            transform: 'rotate(0deg)',
                        },
                    },

                    '.MuiAccordionSummary-expandIconWrapper': {
                        transform: 'rotate(90deg)',
                    },
                },
            },
        },

        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    background: 'white',

                    borderRadius: '100vw !important',

                    paddingInline: '12px !important',

                    '.MuiAccordionSummary-content': {
                        margin: '6px 0 !important',
                    },

                    minHeight: 'unset!important',
                },
            },
        },

        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    //   background: myPalette.gray[200],

                    borderBottomLeftRadius: 'max(10px, 0.8vw)',

                    borderBottomRightRadius: 'max(10px, 0.8vw)',
                },
            },
        },
    },
});

export default theme;
