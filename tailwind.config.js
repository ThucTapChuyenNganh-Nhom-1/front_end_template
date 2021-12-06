module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      '1': 1,
      '2': 2,
      '3': 3
    },

    // borderWidth: {
    //   DEFAULT: '1px',
    //   '0': '0',
    //   '1': '1px',
    //   '2': '2px',
    //   '3': '3px',
    //   '4': '4px',
    //   '5': '5px',
    //   '6': '6px',
    //   '7': '7px',
    //   '8': '8px',
    // },

    // borderColor: {
    //   'gray-nav': 'rgba(42, 42, 42, 0.2)',
    // },

    // height: {
    //   '100': '100px'
    // },

    extend: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
