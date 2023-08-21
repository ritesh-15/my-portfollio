/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#91F5AD",
        primary: "#758BFD",
        secondary: "#111111",
        secondaryVarient: "#232323",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
