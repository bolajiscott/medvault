/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F3C723',
        'secondary': '#FE655F',
        'tertiary': '#5A7184',
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'home-gradient': "linear-gradient(180deg, #f5f5f5 0%, #F8FBFF 100%)"
      },
    },
  },
  plugins: [],
}