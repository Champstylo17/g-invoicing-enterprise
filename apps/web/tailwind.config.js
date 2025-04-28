/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          govblue: "#1a4480",
          govred: "#a31f34",
          govgray: "#f0f0f0",
        },
      },
    },
    plugins: [],
  };
  