module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      widest: '.5em',
    },
    container:{
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
