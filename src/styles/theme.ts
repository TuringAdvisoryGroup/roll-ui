import {
  white,
  grey,
  crimson,
  dodgerBlue,
  orange,
  mistyRose,
  aliceBlue,
  darkNavy,
} from ".";
import { lavendar, lightGray } from "./colors";

interface PaletteBase {
  primary: string;
  secondary: string;
  highlight: string;
  error: string;
  warning: string;
}

interface PaletteBackground extends PaletteBase {
  lowLight: string;
  tertiary: string;
}

export type Theme = {
  background: PaletteBackground;
  text: PaletteBase;
};

export const lightTheme: Theme = {
  background: {
    primary: white,
    secondary: aliceBlue,
    tertiary: lightGray,
    highlight: lavendar,
    lowLight: darkNavy,
    error: mistyRose,
    warning: orange,
  },
  text: {
    primary: "black",
    secondary: grey,
    highlight: dodgerBlue,
    error: crimson,
    warning: orange,
  },
};

/**
 * Keeping as a reference for the time being until
 * this new theme format is more better adopted
 */
// backgroundPrimary: white,
// backgroundPage: ghostWhite,
// backgroundSecondary: aliceBlue,
// backgroundModal: white,
// backgroundHeader: white,
// backgroundError: mistyRose,
// textMuted: grey,
// textError: crimson,
// textWarning: orange,
// highlight: dodgerBlue,
// backgroundGrey: solitudeGrey,
// backgroundBlue: darkNavy,
