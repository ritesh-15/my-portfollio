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
        // primary: "#0AFF9D",
        primary: "#758BFD",
        secondary: "#111111",
        secondaryVarient: "#232323",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
