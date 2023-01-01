/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FCA311",
        secondary: "#000000",
      },
    },
    fontFamily: {
      opensans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
  darkMode: "class",
}
