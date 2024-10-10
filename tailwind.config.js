/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", 'html[class~="dark"]'],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/**/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem", // Add this new option
        "10xl": "110rem",
      },
      fontSize: {
        xs: "0.875rem", // Increased from 0.8125rem
        sm: "1rem", // Increased from 0.9375rem
        base: "1.125rem", // Increased from 1rem
        lg: "1.25rem", // Increased from 1.0625rem
        xl: "1.375rem", // Increased from 1.1875rem
        "2xl": "1.5rem", // Increased from 1.3125rem
        "3xl": "1.75rem", // Increased from 1.5625rem
        "4xl": "2.125rem", // Increased from 1.9375rem
        "5xl": "2.5rem", // Increased from 2.3125rem
        "6xl": "3.25rem", // Increased from 3.0625rem
      },
      colors: {
        primary: {
          50: "#fef2f6",
          100: "#fde6ed",
          200: "#fac0d3",
          300: "#f79ab9",
          400: "#f15086",
          500: "#ED155D",
          600: "#d50d4f",
          700: "#b20a42",
          800: "#930a38",
          900: "#7b0a30",
        },
        "brand-primary": "var(--brand-primary)",
        "brand-accent": "var(--brand-accent)",
        "brand-accent-hover": "var(--brand-accent-hover)",
        // Add other custom colors if needed
      },
    },
  },
  plugins: [],
};
