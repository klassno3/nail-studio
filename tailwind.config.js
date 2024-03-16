/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "accentRed-dark": "#E51919",
        "darkGray":"#777",
        "meduimGray":"#555",
        "lightGray":"#333",
        "black":"#000",
        "white":"#fff",
      },
      fontFamily: {
        roboto:["Roboto","sans-serif"],
        satisfy:["Satisfy","sans-serif"],
      }
    },
  },
  plugins: [],
}