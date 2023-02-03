

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },


    extend: {
      colors: {
        'spc-c': 'rgba(255,255,255,.5)',
        'spc-g': '#90ff24',
        'spc-c2': 'rgba(255, 255, 255, 0.3)',
        'spc-c3': 'rgba(255, 255, 255, 0.1)',

      },
      fontFamily: {
        thin: ['SF UI Display-thin', 'sans - serif'],
        serif: ['Merriweather', 'serif'],
      }

    }
  },
  plugins: [],
}
