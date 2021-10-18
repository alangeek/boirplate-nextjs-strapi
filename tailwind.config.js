/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        ...colors,
        body: colors.blueGray['100'],
        gray: colors.blueGray,
        primary: colors['indigo'],
        secondary: colors['teal'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
