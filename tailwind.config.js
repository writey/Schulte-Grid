
const colors = require('tailwindcss/colors')
module.exports = {
  // purge: [],
  darkMode: 'class',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'even', 'odd','group-focus', 'first', 'checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
      },
      lineHeight: {
        '16': '4rem'
      },
      height: {
        'vw': '100vw'
      },
    },
    inset: {
      '1/5': '20%'
    },
  }
}
