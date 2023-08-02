import lineHeight from './font/lineHeight';
import spacing from './font/letterSpacing';
import weight from './font/weight';
import fontSize from './font/fontSize';
import colors from './colors';
const theme = {
  fontSize,
  lineHeight,
  spacing,
  weight,
  colors,
} as const;

export type ThemeType = typeof theme;
export default theme;
