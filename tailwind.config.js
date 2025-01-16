/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bricolage Grotesque', 'sans-serif'], 
      },
      colors: {
        softPurple: '#887A89', 
        deepGray: '#3F3F3F',
        lightGray: '#CAC8CB',
      },
    },
  },
  plugins: [],
}