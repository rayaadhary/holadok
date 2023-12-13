/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'cursive'],
      },
      colors: {
        primary: '#101C45',
        blue: '#203271',
        secondary: '#9BEAE0',
      },
    },
  },
  plugins: [],
};
