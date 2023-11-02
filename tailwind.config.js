/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    '*.{html,js}',
    './**/*.{html,js}',
    './game/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        inria: ['Inria Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
