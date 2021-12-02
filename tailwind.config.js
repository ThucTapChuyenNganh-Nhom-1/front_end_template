module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'header_bg': "url('/src/images/slider-left-dec.png')"
      },
      gridAutoRows: {
        '0.2fr': 'minmax(0, 0.2fr)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
