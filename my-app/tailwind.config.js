/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        copper: {
          600: '#B87C4C',
          700: '#A66B3E',
        },
      },
    },
  },
  plugins: [],
}