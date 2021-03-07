import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints, mode } from '@chakra-ui/theme-tools';

const fonts = { mono: `'JetBrains Mono', monospace` };

const breakpoints = createBreakpoints({
 sm: '40em',
 md: '52em',
 lg: '64em',
 xl: '80em',
});

const DARK_BOX_SHADOW =
 '0px 2px 4px rgb(195 29 40 / 0.9), 0px 4px 8px rgb(195 29 40 / 0.9), 0px 8px 16px rgb(195 29 40 / 0.5)';
const LIGHT_BOX_SHADOW =
 '0px 1px 2px rgb(55 114 225 / 0.9), 0px 2px 4px rgb(55 114 225 / 0.9), 0px 4px 8px rgb(55 114 225 / 0.9), 0px 8px 16px rgb(55 114 225 / 0.5)';

export const theme: any = extendTheme({
 colors: {
  brand: {
   lavaRed: '#C31D28',
   maizeYellow: '#FDCD49',
   platinumWhite: '#E6E8E6',
   pureWhite: '#FFFFFF',
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
 sizes: {
  width: '80%',
 },
 config: {
  useSystemColorMode: true,
  initialColorMode: 'light',
 },
});
