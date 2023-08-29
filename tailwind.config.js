/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#F3C723',
      'secondary': '#FE655F',
      'tertiary': '#5A7184',

    },
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif']
    },
    backgroundImage: {

    },
    extend: {},
  },
  plugins: [],
}