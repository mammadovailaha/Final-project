/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
 colors:{
  primary:"#dcfff0",
  secondary:"#437118",
   background: "#f5f5f5"
 }

    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.rotate-y-0': {
          transform: 'rotateY(0deg)',
        },
        '.rotate-y-90': {
          transform: 'rotateY(90deg)',
          'transform-origin': 'right',
        },
        '.perspective': {
          perspective: '1000px',
        },
      });
    },
  ],
};


