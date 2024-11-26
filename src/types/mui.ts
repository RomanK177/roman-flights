import { ButtonPropsVariantOverrides } from '@mui/material/Button';

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
