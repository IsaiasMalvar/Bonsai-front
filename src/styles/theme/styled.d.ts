import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      light: string;
      dark: string;
      active: string;
      modalNegative: string;
      deactivated: string;
      buttonFiller: string;
    };

    fonts: {
      primary: string;
    };

    fontSizes: {
      medium: string;
      regular: string;
      big: string;
    };
  }
}

export default DefaultTheme;
