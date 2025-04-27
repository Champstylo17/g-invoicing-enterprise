const path = require("path");

module.exports = {
  // 1️⃣ Enable class-based Dark Mode
  darkMode: "class",

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
    // 3️⃣ Global container defaults
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    extend: {
      // 4️⃣ Font stack
      fontFamily: {
        sans: ['"Source Sans Pro"', "ui-sans-serif", "system-ui", "sans-serif"],
      },

      // 5️⃣ Government branding colors
      colors: {
        govblue: "#1A4480",
        govred: "#A31F34",
        govgray: "#F0F0F0",
      },

      // 6️⃣ Shadows for header and cards
      boxShadow: {
        header: "0 2px 4px rgba(0,0,0,0.06)",
        card: "0 1px 3px rgba(0,0,0,0.08)",
      },

      // 7️⃣ Unified border radius
      borderRadius: {
        gov: "0.375rem",
      },

      // 8️⃣ Extra spacing scales
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },

      // 9️⃣ Additional font sizes
      fontSize: {
        xxs: "0.625rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
    },
  },

  // 10️⃣ Preconfigure future plugins
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
