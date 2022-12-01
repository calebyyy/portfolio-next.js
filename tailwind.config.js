/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Montserrat', 'sans-serif','Helvetica Neue'],
      heading:['Montserrat', 'sans-serif','Helvetica Neue'],
      mono:['Helvetica Neue']

    }
  },
  plugins: [],
}