// Next
import localFont from 'next/font/local';

// ----------------------------------------------------------------------

export const yekan = localFont({
  src: [
    { path: '../../../public/fonts/YekanBakh-Regular.eot', weight: 'normal' },
    { path: '../../../public/fonts/YekanBakh-Regular.ttf', weight: 'normal' },
    { path: '../../../public/fonts/YekanBakh-Regular.woff', weight: 'normal' },
    { path: '../../../public/fonts/YekanBakh-Regular.woff2', weight: 'normal' },

    { path: '../../../public/fonts/YekanBakh-Thin.eot', weight: '100' },
    { path: '../../../public/fonts/YekanBakh-Thin.ttf', weight: '100' },
    { path: '../../../public/fonts/YekanBakh-Thin.woff', weight: '100' },
    { path: '../../../public/fonts/YekanBakh-Thin.woff2', weight: '100' },

    { path: '../../../public/fonts/YekanBakh-Heavy.eot', weight: '900' },
    { path: '../../../public/fonts/YekanBakh-Heavy.ttf', weight: '900' },
    { path: '../../../public/fonts/YekanBakh-Heavy.woff', weight: '900' },
    { path: '../../../public/fonts/YekanBakh-Heavy.woff2', weight: '900' },

    { path: '../../../public/fonts/YekanBakh-Light.eot', weight: '300' },
    { path: '../../../public/fonts/YekanBakh-Light.ttf', weight: '300' },
    { path: '../../../public/fonts/YekanBakh-Light.woff', weight: '300' },
    { path: '../../../public/fonts/YekanBakh-Light.woff2', weight: '300' },

    { path: '../../../public/fonts/YekanBakh-Bold.eot', weight: 'bold' },
    { path: '../../../public/fonts/YekanBakh-Bold.ttf', weight: 'bold' },
    { path: '../../../public/fonts/YekanBakh-Bold.woff', weight: 'bold' },
    { path: '../../../public/fonts/YekanBakh-Bold.woff2', weight: 'bold' },

    { path: '../../../public/fonts/YekanBakh-Medium.eot', weight: '500' },
    { path: '../../../public/fonts/YekanBakh-Medium.ttf', weight: '500' },
    { path: '../../../public/fonts/YekanBakh-Medium.woff', weight: '500' },
    { path: '../../../public/fonts/YekanBakh-Medium.woff2', weight: '500' },
  ],
  variable: '--font',
});

// ----------------------------------------------------------------------

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }: { sm: number; md: number; lg: number }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

// ----------------------------------------------------------------------

const typography = {
  fontFamily: yekan.style.fontFamily,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 800,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 800,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
  },
} as const;

export default typography;
