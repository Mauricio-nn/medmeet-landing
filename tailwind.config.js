/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary : '#2C45B4',
        secondary : '#009FDF',
        contrast: '#FF7152',
        snow: '#F1F6FF',
        white: '#FFFFFF',
        black: '#000000'
      },
      container: {
        center:true,
      },
      fontSize: {
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '56': '56px',
      }
    },
  },
  plugins: [],
}

