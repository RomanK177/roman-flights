import { ButtonPropsVariantOverrides } from '@mui/material/Button';
import { TypographyPropsVariantOverrides } from '@mui/material/Typography';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        mainButton: true;
        containedWhite: true;
        containedGray: true;
        outlineLight: true;
        transparentBlue: true;
        containedLightBlue: true;
        containedBlue: true;
        myDisabled: true;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        'headers/header1': true;
        'headers/h2header 2': true;
        'headers/h3header 3': true;
        'headers/h4header 4': true;
        'headers/h5header 5': true;
        'headers/h6header 6': true;
        'body/body1': true;
    }
}

declare module '@mui/material/styles' {
    interface TypeBackground {
        main: string;
        dark: string;
        light: string;
        lighter: string;
        overlay: string;
        overlay_light: string;
    }

    interface Palette {
        background: TypeBackground;
        border: TypeBackground;
        yellow: TypeBackground;
        blue: TypeBackground;
    }

    interface PaletteOptions {
        background?: Partial<TypeBackground>;
    }
}
