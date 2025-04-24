const path = require("path");

module.exports = {
  content: [
    "./apps/**/*.{js,jsx,ts,tsx}",
    "./packages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
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
    },
  },
  plugins: [],
};
