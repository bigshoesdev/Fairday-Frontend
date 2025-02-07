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
        xs: '475px', // Custom (not included by default)
        sm: '640px', // Small screens (mobile)
        md: '768px', // Medium screens (tablets)
        lg: '1024px', // Large screens (laptops)
        xl: '1280px', // Extra large screens (desktops)
        '2xl': '1536px'
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
        width: '1419px',
        center: true, // Ensures the container is always centered
        padding: {
          DEFAULT: '3rem', // Default padding for all breakpoints
          sm: '2rem',      // Padding for the 'sm' breakpoint
          lg: '4rem',      // Padding for the 'lg' breakpoint
          xl: '5rem',      // Padding for the 'xl' breakpoint
        },
        screens: {
          xs: '490px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
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
