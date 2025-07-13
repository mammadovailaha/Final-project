/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
   extend: {
      colors: {
        primaryDark: "#393939",
        primaryMid: "#849561",
        primaryLight: "#eed690",
      },
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


