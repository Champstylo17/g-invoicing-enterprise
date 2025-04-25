const path = require("path");

module.exports = {
  content: [
    "./apps/**/*.{js,jsx,ts,tsx}",
    "./packages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/features/**/*.{js,jsx}",
    "./src/dashboard/pages/**/*.{js,jsx}",
    "./src/tables/**/*.{js,jsx}",
    "./src/cards/**/*.{js,jsx}",
    "./src/charts/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans Pro"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        govblue: "#1a4480",
        govred: "#a31f34",
        govgray: "#f0f0f0",
      },
      boxShadow: {
        header: "0 2px 4px rgba(0,0,0,0.06)",
        card: "0 1px 3px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        gov: "0.375rem",
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      fontSize: {
        'xxs': '0.625rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
