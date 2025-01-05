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
  			'8xl': '90rem',
  			'9xl': '100rem',
  			'10xl': '110rem'
  		},
  		fontSize: {
  			xs: '0.875rem',
  			sm: '1rem',
  			base: '1.125rem',
  			lg: '1.25rem',
  			xl: '1.375rem',
  			'2xl': '1.5rem',
  			'3xl': '1.75rem',
  			'4xl': '2.125rem',
  			'5xl': '2.5rem',
  			'6xl': '3.25rem'
  		},
  		colors: {
  			primary: {
  				'50': '#fef2f6',
  				'100': '#fde6ed',
  				'200': '#fac0d3',
  				'300': '#f79ab9',
  				'400': '#f15086',
  				'500': '#ED155D',
  				'600': '#d50d4f',
  				'700': '#b20a42',
  				'800': '#930a38',
  				'900': '#7b0a30',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			'brand-primary': 'var(--brand-primary)',
  			'brand-accent': 'var(--brand-accent)',
  			'brand-accent-hover': 'var(--brand-accent-hover)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
