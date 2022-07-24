import { createTheme } from '@vanilla-extract/css';

export const [styleThemeClass, styleVars] = createTheme({
  space: {
    xSmall: '4px',
    small: '8px',
    medium: '12px',
    large: '16px',
    xLarge: '24px',
    xxLarge: '36px',
  },
});
