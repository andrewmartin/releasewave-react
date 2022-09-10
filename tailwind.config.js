const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const fontSize = (multiplier = 1) => {
  const base = 1.3;
  const number = base * multiplier;
  return number + `rem`;
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx}',
    // './src/components/**/*.{js,ts,jsx,tsx}',
    // './src/context/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish', ...defaultTheme.fontFamily.sans],
        heading: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      // https://www.tailwindshades.com/
      pink: {
        DEFAULT: '#AC1E8C',
        50: '#ED95D9',
        100: '#E984D3',
        200: '#E361C6',
        300: '#DD3EBA',
        400: '#CF24A8',
        500: '#AC1E8C',
        600: '#7C1665',
        700: '#4C0D3E',
        800: '#1D0517',
        900: '#000000',
      },
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    fontSize: {
      xs: '.9rem',
      sm: '1.2rem',
      tiny: '1rem',
      base: fontSize(1),
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': fontSize(3),
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
