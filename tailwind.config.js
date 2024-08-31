/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', 'html[class~="dark"]'],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/**/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem', // Add this new option
        '10xl': '110rem',
      },
      fontSize: {
        'xs': '0.8125rem',    // Increased from 0.75rem
        'sm': '0.9375rem',    // Increased from 0.875rem
        'base': '1rem',       // Increased from 0.9375rem
        'lg': '1.0625rem',    // Increased from 1rem
        'xl': '1.1875rem',    // Increased from 1.125rem
        '2xl': '1.3125rem',   // Increased from 1.25rem
        '3xl': '1.5625rem',   // Increased from 1.5rem
        '4xl': '1.9375rem',   // Increased from 1.875rem
        '5xl': '2.3125rem',   // Increased from 2.25rem
        '6xl': '3.0625rem',   // Increased from 3rem
      },
      colors: {
        primary: {
          50: '#fef2f6',
          100: '#fde6ed',
          200: '#fac0d3',
          300: '#f79ab9',
          400: '#f15086',
          500: '#ED155D',
          600: '#d50d4f',
          700: '#b20a42',
          800: '#930a38',
          900: '#7b0a30',
        },
      },
    },
  },
  plugins: [],
};
