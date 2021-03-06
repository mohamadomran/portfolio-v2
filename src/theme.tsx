import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints, mode } from '@chakra-ui/theme-tools';

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
 sm: '40em',
 md: '52em',
 lg: '64em',
 xl: '80em',
});

const LIGHT_BOX_SHADOW =
 '0px 1px 2px rgb(221 221 229 / 0.9), 0px 2px 4px rgb(221 221 229 / 0.9), 0px 4px 8px rgb(221 221 229 / 0.9), 0px 8px 16px rgb(221 221 229 / 0.5)';
const DARK_BOX_SHADOW =
 '0px 1px 2px rgb(10 10 10 / 0.9), 0px 2px 4px rgb(10 10 10 / 0.9), 0px 4px 8px rgb(10 10 10 / 0.9), 0px 8px 16px rgb(10 10 10 / 0.5)';

export const theme = extendTheme({
 colors: {
  dark: {
   text: {
    primary: '#fff',
    secondary: '#555',
   },
   background: {
    main: '#000',
    card: '#000',
   },
  },
  light: {
   text: {
    primary: '#000',
    secondary: '#fff',
   },
   background: {
    main: '#555',
    card: '#000',
   },
  },
  brand: {
   lavaRed: '#C31D28',
   maizeYellow: '#FDCD49',
   platinumWhite: '#E6E8E6',
   pureWhite: '#F5F5F5',
   crayolaBlue: '#3772FF',
   richBlack: '#080708',
   raisinBlack: '#211C21',
  },
 },
 fonts,
 breakpoints,
 shadows: {
  boxLight: LIGHT_BOX_SHADOW,
  boxDark: DARK_BOX_SHADOW,
 },
 styles: {
  global: props => ({
   'html, body': {
    bg: mode(theme.colors.brand.platinumWhite, '#171717')(props),
    color: mode('#111', '#fff')(props),
   },
  }),
 },
 config: {
  useSystemColorMode: true,
  initialColorMode: 'light',
 },
});
