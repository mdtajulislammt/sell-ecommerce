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
          yellow: '#f4d40d',
          black:"#040707",
          white:"#ffffff",
          blue:"#3279bb",
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

