/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      colors:{
        primary:{
          green: '#1b9f29',
          greenLight:'#60b065',
          black:"#1b222f",
          white:"#ffffff",
          red:'#ff0000'
        },
      },
    },
    fontFamily: {
      primaryFront: ['Quicksand', 'sans-serif'],
      secondaryFront: ['Poppins' , 'sans-serif'],
    },
  },
  plugins: [require("daisyui")],
}

