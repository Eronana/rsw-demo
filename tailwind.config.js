/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '568px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      // '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: '#74C69D',
      },
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        'crimson-text': ['Crimson Text'],
      },
      spacing: {
        3.75: '15px',
        4.5: '18px',
        5.25: '21px',
        7.5: '30px',
        8.75: '35px',
        9.5: '38px',
        15: '60px',
        30: '120px',
        32.5: '130px',
        33.75: '135px',
      },
    },
  },
  plugins: [],
};
