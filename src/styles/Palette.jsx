import { alpha } from '@mui/material/styles';

export const myPalette = {
    primary: {
        main: '#2F3D4C',
        dark: '#181D2C',
        dark50: alpha('#0F2A8D', 0.5),
        semiDark: '#093545',
        extraDark: '#181D2C',
        light: '#A5A5A5',
        lighter: '#2DC8FA',
        extra_light: '#EFEFEF',
    },

    secondary: {
        main: '#EE2051',
        dark: '#dd0a3c',
        light: '#f33964',
        //you have to provide primary main and light, can even more but not less
    },

    text: {
        main: '#6B7580',
        primary: '#6B7580',
        secondary: '#6B7580',
    },

    blue: {
        main: '#004B8E',
        dark: '#b9e5f5',
        light: '#FAFBFE',
        extra_dark: '#878D96',
    },

    green: {
        main: '#33D951',
        light: '#70f187',
        dark: '#1bec42',
        button: '#20a100',
    },

    yellow: {
        dark: '#FCF801',
        main: '#FFE014',
        primary: '#FFE014',
        secondary: '#FFE014',
        light: '#f7f468',
    },

    button: {
        // main: '#365DEC',

        main: '#002DCF',

        light: '#002DCF',

        dark: '#1651a8',

        extra_light: '#b7c0dd',
    },

    my_white: {
        main: '#F5F5F5',

        dark: '#ffffff',

        light: '#FFFFFF26',
    },
    border: {
        main: '#767676',
        primary: '#767676',
        secondary: '#767676',
        light: '#CADAE8',
        dark: '#B0C7DC',
    },

    background: {
        main: '#EBF1F6',
        dark: '#DEE8F0',
        light: '#F3F3F3',
        lighter: '#FAFBFD',
        overlay: 'rgba(0, 0, 0, 0.5)',
        overlay_light: 'rgba(255, 255, 255, 0.40)',
    },
};
