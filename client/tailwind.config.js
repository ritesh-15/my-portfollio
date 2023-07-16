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
        primary: "#8DFC00",
        secondary: "#151515",
        secondaryVarient: "#232323",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
