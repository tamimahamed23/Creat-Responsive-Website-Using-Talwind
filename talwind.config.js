/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {

        colors: {
            'tamim': 'var(--Linear, linear-gradient(270deg, #F00 0%, #FF8938 100%));',

            'tamim-100':'linear-gradient(270deg, rgba(255, 0, 0, 0.10) 0%, rgba(255, 137, 56, 0.10) 100%);',
          },
      },
    },
    plugins: [],
  }