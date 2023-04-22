/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},

    container: { 
      center: true,
      padding: {
        DEFAULT: '2rem',
        md: '2rem',
      }
    },
  },

  

  plugins: [require("daisyui")],

  daisyui: {
    themes: ["synthwave"],
  },

  

  
}
