/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // 'xs': '490px',
        // 'sm': '768px',
        // 'md': '1013px',
        // 'lg': '1419px',
        // // 'container': '1419px',
        'header_change': '1132px',
        xs: '490px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1368px',
        '2xl': '1600px'
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
      container: {
        center: true, // Ensures the container is always centered
        padding: {
          DEFAULT: '1rem',
          xs: '1rem', // Default padding for all breakpoints
          sm: '2rem', 
          md:'3rem',     // Padding for the 'sm' breakpoint
          lg: '3rem',      // Padding for the 'lg' breakpoint
          xl: '3rem',      // Padding for the 'xl' breakpoint
          '2xl': '3rem',      // Padding for the 'xl' breakpoint
        },
        screens: {
          xs: '490px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1368px',
          '2xl': '1600px'
        },
      },

      fontSize: {
        title: ['25px'],
        contentText: '18px',
        subtitle3: '20px',
      }
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const title = {
        '.title': {
          fontSize: theme('fontSize.title'),
        },
        '@screen xs': {
          '.title': {
            fontSize: '30px',
          },
        },
        '@screen sm': {
          '.title': {
            fontSize: '30px',
          },
        },
        '@screen md': {
          '.title': {
            fontSize: '44px',
          },
        },
      };
      addUtilities(title);
    },

    function ({ addUtilities, theme }) {
      const subtitle3 = {
        '.subtitle3': {
          fontSize: theme('fontSize.subtitle3'),
        },
        '@screen sm': {
          '.subtitle3': {
            fontSize: '22px',
          },
        },
      };
      addUtilities(subtitle3);
    },
  ],
};
