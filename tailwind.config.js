/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', 'html[class~="dark"]'],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/**/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '0.75rem', // 12px
        'sm': '0.875rem', // 14px
        'base': '0.9375rem', // 15px
        'lg': '1rem', // 16px
        'xl': '1.125rem', // 18px
        // Add more custom sizes as needed
      },
    },
  },
  plugins: [],
};
