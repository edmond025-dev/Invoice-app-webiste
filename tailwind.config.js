/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
      fontFamily: {
        stix: ['"STIX Two Text"', 'serif'], 
        inter: ['Inter', 'sans-serif'], // add a custom font key
      },
      fontSize: {
        '7xl': '72px',
        'lg-custom': '16px',
        'md-custom': '14px',
        'navbar-16': '16px', // confirm or override size 7xl to 72px
      }
    },
  },
  plugins: [],
}

