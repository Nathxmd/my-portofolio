/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#64748b",
        dark: "#0f172a",
        light: "#f8fafc",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
