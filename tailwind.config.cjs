/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Roboto', sans-serif"
      },
      backgroundImage: {
        'game': "url(/images/background.png')"
      }
    },
  },
  plugins: [],
}
