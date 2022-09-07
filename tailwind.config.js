/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: "#2A206A",
      secondary: "#1CC283"
    },
    extend: {
      fontSize: {
        '4xl': ['40px', '48px'],
        '5xl': ['50px', '55px']
      }
    },
  },
  plugins: [],
}