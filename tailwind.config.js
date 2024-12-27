/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      screens: {
        'xs': '490px',
        'sm': '768px',
        'md': '1013px',
        'lg': '1419px',
        'container': '1419px',
        'header_change': '1132px',
      },
      
      colors: {
        tealGray: '#304B5E',
        darkTealGray: '#263d4e',
        darkgray: '#788A96',
        primaryGray: '#B2BAC1',
        lightBlue: '#1a7ff3',
        darkBlue: '#1470ef',
        primaryBlue: '#197ff2',
        darkYellow: '#D7B135'
      },
    },
  },
  plugins: [],
};
