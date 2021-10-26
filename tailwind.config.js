module.exports = {
  mode: 'jit',
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: [[/^bg-/, /^text-/, /^border-/, /^default-/, /^hover-/,]]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red_default: '#FF0054',
        red_hover: '#E6003B',
        red_pressed: '#CC0021',

        blue_default: '#0A344F',
        blue_hover: '#001B36',
        blue_pressed: '#0A344F',
      },
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active, focus'],
      borderColor: ['active, focus']
    }
  },
  plugins: [],
}
