/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    '*.{html,ts}',
    './**/*.{html,ts}'],
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
