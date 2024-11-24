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
        fontFamily: ['Work Sans', 'sans-serif'].join(','),
        ...myTpography,
    },

    //EXAMPLE TO COMPONENT OVERRIDES

    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    width: 'min(1248px, 95%)!important',
                    maxWidth: 'unset!important',
                    position: 'relative',
                    padding: '0px!important',

                    background: 'white',

                    '&.rounded': {
                        boxShadow: '0px 0px 30px 0px rgba(15, 42, 141, 0.15)',

                        width: 'unset',

                        margin: 'unset',

                        padding: 'unset',

                        marginBlock: '35px 130px',

                        marginInline: '24px',

                        borderRadius: '30px',

                        paddingBottom: '9px;',

                        '@media (min-width: 769px)': {
                            marginInline: 'auto',

                            paddingBottom: '20px;',
                        },
                    },

                    '&.blank': {
                        position: 'fixed',

                        inset: '0',

                        borderRadius: 'unset',

                        paddingInline: '15px ',

                        boxShadow: 'unset',

                        backgroundColor: '#fff',

                        margin: 'unset',

                        zIndex: 10,

                        '.header': {
                            marginTop: '16px',

                            marginBottom: '25px',
                        },

                        '.page-titles': {
                            h1: {
                                fontFamily: 'Open Sans',

                                fontSize: '32px',

                                fontWeight: 700,

                                lineHeight: 1.1,

                                color: `${myPalette.primary.semiDark}`,
                            },

                            h2: {
                                fontFamily: 'Open Sans',

                                fontSize: '18px',

                                fontWeight: 400,

                                lineHeight: 1.5,

                                color: `${myPalette.primary.semiDark}`,
                            },
                        },

                        '@media (min-width: 769px)': {
                            top: '75px',

                            left: '50%',

                            transform: 'translateX(-50%)',
                        },
                    },
                },
            },
        },

        MuiButton: {
            styleOverrides: {
                // Name of the slot
                ...myButtons,
                root: {
                    lineHeight: 1,
                    paddingBlock: '10px',
                    // Some CSS
                    // paddingInline: '24px',
                    // borderRadius: '100vw',
                    // fontSize: '1rem',
                },
            },
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    border: '1px solid transparent',
                    '&.main-dark': {
                        backgroundColor: '#2C2C2C', // Apply background color here
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
                    },
                    '&.form-input': {
                        color: 'white',
                        backgroundColor: '#1F2832',
                        borderRadius: '1px',
                        fontSize: '12px',
                        overflow: 'hidden',
                        border: '2px solid #2F3D4C',
                        '*': {
                            backgroundColor: 'transparent',
                            border: '0px solid rgba(15, 42, 141, 0.50)',
                            '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active':
                                {
                                    color: 'white!important',
                                    transition:
                                        'background-color 5000s ease-in-out 0s', // Fixes autofill background flash
                                    backgroundColor: 'transparent !important',
                                    WebkitBoxShadow:
                                        '0 0 0 30px transparent inset !important', // Ensures transparent autofill background
                                },
                        },
                        '& .MuiOutlinedInput-root': {
                            // Ensuring background applies here
                            backgroundColor: '#1F2832',
                            '& input': {
                                color: 'white!important',
                                textAlign: 'left',
                                padding: '11px',
                                backgroundColor: 'transparent', // Ensures input background is transparent
                            },
                            '& input:-webkit-autofill': {
                                '-webkit-text-fill-color': 'white', // Sets text color in autofill
                                '-webkit-box-shadow':
                                    '0 0 0px 1000px #1F2832 inset', // Ensures background color stays the same
                                transition:
                                    'background-color 5000s ease-in-out 0s',
                            },
                        },
                        '& .MuiOutlinedInput-input': {
                            backgroundColor: 'transparent',
                        },
                    },
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

        MuiCard: {
            styleOverrides: {
                root: {
                    position: 'relative',

                    boxShadow: '0px 0px 30px 0px rgba(15, 42, 141, 0.15)',

                    borderRadius: '15px',

                    // width: 'unset',

                    // height: 'max(18.385vw, 348px)',

                    padding: 'unset',

                    marginBottom: '22px',

                    '@media (min-width: 769px)': {
                        marginBottom: '30px',
                    },

                    img: {
                        width: '100%',

                        borderRadius: '15px 15px 0 0',
                    },

                    '.tag': {
                        position: 'absolute',

                        top: '15px',

                        left: '15px',

                        color: `${myPalette.my_white.main}`,

                        fontSize: '18px',

                        fontWeight: 400,

                        lineHeight: '1',

                        padding: '5px 15px',

                        borderRadius: '15px',

                        background: 'rgba(45, 200, 250, 0.25)',
                    },

                    '.magnify': {
                        position: 'absolute',

                        right: '15px',

                        top: '15px',
                    },

                    '.post-details': {
                        padding: '20px',

                        flexGrow: '1',

                        h2: {
                            color: `${myPalette.primary.main}`,

                            fontSize: '22px',

                            fontWeight: 700,

                            lineHeight: 1.1,
                        },

                        p: {
                            color: `${myPalette.primary.main}`,

                            fontSize: '16px',
                        },
                    },
                },
            },
        },

        MuiFormControl: {
            styleOverrides: {
                root: {
                    '.MuiInputBase-root': {
                        '&.light-border': {
                            borderRadius: '30px',

                            border: `1px solid ${myPalette.button.extra_light}`,

                            flexGrow: 1,
                        },

                        div: {
                            //   paddingRight: 'unset !important',

                            //   padding: '3px 15px !important',

                            textOverflow: 'unset',

                            color: myPalette.button.extra_light,
                        },

                        // svg: { display: 'none' },

                        fieldset: { display: 'none' },
                    },
                },
            },
        },

        MuiStack: {
            styleOverrides: {
                root: {
                    // '.selected': {

                    // 	backgroundColor: myPalette.primary.main,

                    // 	color: myPalette.my_white.main,

                    // },

                    '.checkbox-wrapper': {
                        input: {
                            position: 'relative',

                            width: '16px',

                            height: '16px',

                            backgroundColor: 'transparent',

                            borderRadius: '50%',

                            verticalAlign: 'middle',

                            border: `1px solid ${myPalette.primary.main}`,

                            appearance: 'none',

                            outline: 'none',

                            cursor: 'pointer',

                            '&:checked': {
                                backgroundColor: 'gray',
                            },
                        },
                    },
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

        MuiSelect: {
            styleOverrides: {
                ...{
                    root: {
                        '&.lang-select': {
                            color: myPalette.primary.main,
                            borderRadius: '1px',
                            backgroundColor: myPalette.background.dark,
                            fontWeight: '600',
                            '& *': {
                                border: 'none',
                            },
                            '& .MuiSelect-select': {
                                paddingBlock: '7.5px',
                                border: `1px solid ${myPalette.border.light}`,
                            },
                            '& .MuiSelect-icon': {
                                display: 'none',
                            },
                        },
                        '&.lang-select.c2': {
                            backgroundColor: myPalette.background.main,
                        },
                        '&.lang-select2': {
                            color: 'white',
                            borderRadius: '1px',
                            border: 'none',
                            backgroundColor: '#1F2832',
                            fontWeight: '600',
                            // width: '100%',
                            '& *': {
                                border: 'none!important',
                            },
                            '& .MuiSelect-select': {
                                paddingBlock: '7.5px',
                                border: `1px solid ${myPalette.border.light}`,
                            },
                            '& .MuiSelect-icon': {
                                color: 'white',
                            },
                        },
                    },
                },
            },
        },
    },
});

export default theme;
