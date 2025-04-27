const path = require("path");

module.exports = {
  // 1️⃣ Enable class-based Dark Mode
  darkMode: ["class", "class"],

  // 2️⃣ All the places Tailwind should scan for class names:
  content: [
    "./apps/**/*.{js,jsx,ts,tsx}",
    "./packages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/features/**/*.{js,jsx,ts,tsx}",
    "./src/dashboard/pages/**/*.{js,jsx,ts,tsx}",
    "./src/tables/**/*.{js,jsx,ts,tsx}",
    "./src/cards/**/*.{js,jsx,ts,tsx}",
    "./src/charts/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,jsx,ts,tsx}",

    // include shadcn/ui components
    "./node_modules/@shadcn/ui/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
  	container: {
  		center: true,
  		padding: {
  			DEFAULT: '1rem',
  			sm: '2rem',
  			lg: '4rem',
  			xl: '5rem',
  			'2xl': '6rem'
  		}
  	},
  	extend: {
  		fontFamily: {
  			sans: [
  				'Source Sans Pro"',
  				'ui-sans-serif',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		colors: {
  			govblue: '#1A4480',
  			govred: '#A31F34',
  			govgray: '#F0F0F0',
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
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
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
  		boxShadow: {
  			header: '0 2px 4px rgba(0,0,0,0.06)',
  			card: '0 1px 3px rgba(0,0,0,0.08)'
  		},
  		borderRadius: {
  			gov: '0.375rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		spacing: {
  			'18': '4.5rem',
  			'22': '5.5rem'
  		},
  		fontSize: {
  			xxs: '0.625rem',
  			xl: '1.25rem',
  			'2xl': '1.5rem'
  		}
  	}
  },

  // 10️⃣ Preconfigure future plugins
  plugins: [
      require("tailwindcss-animate")
],
};
