/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
      },
      letterSpacing: {
        tighter: '-.04em',
        tight: '-.02em',
        widest: '.25em',
      }
    },
  },
  plugins: [],
}