/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#172A3A",
        "secondary":"#09BC8A"
      }
    },
    fontFamily:{
      "nunito":[ 'Nunito', "sans-serif"]
    }
  },
  plugins: [],
}
