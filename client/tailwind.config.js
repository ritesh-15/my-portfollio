/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8DFC00",
        secondary: "#151515",
      },
    },
    fontFamily: {
      opensans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
  darkMode: "class",
}
