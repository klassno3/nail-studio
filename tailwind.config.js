/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "accentRed-dark": "#E51919",
        "accentRed-meduim": "#f35555",
        "darkGray":"#777",
        "meduimGray":"#555",
        "lightGray":"#fcfcfc",
        "black":"#000",
        "white":"#fff",
      },
      fontFamily: {
        roboto:["Roboto","sans-serif"],
        satisfy:["Satisfy","sans-serif"],
      },
        backgroundImage: {
        'text-gradient': 'linear-gradient(to right, #444, #444 50%, #f35555 50%)',
      },

    },
  },
  plugins: [],
}