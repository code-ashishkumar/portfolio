/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  fontFamily: {
      custom: ['Helvetica', 'sans-serif'],
      
      
    },
    screens: {
      'xsm': '430px'
    },
    },
  },
  plugins: [],
}