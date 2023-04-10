/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      blue : '#2C45B4',
      lightblue : '#009FDF',
      orange: '#FF7152',
      snow: '#F1F6FF',
      white: '#FFFFFF',
      black: '#000000'
    },
    extend: {
      backgroundImage: {
        'hero': "url(/src/assets/pexels-karolina-grabowska-7195310.jpg)",
      }
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
    },
    width: {
      '18': '72px'
    }
  },
  plugins: [],
}

