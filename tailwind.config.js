/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "monsterrat": ['monsterrat', 'sans-serif']
      }
    },
    colors: {
      charcoal: '#131313',
      white: '#FFFFFF',
      gray: '#BBBBBB',
      turquoise: '#72f2c7',
    },
    spacing: {
      '0': '0',
      '1': '9px',
      '2': '18px',
      '3': '27px',
      '4': '36px',
      '5': '45px',
      '6': '54px',
      '7': '63px',
      '8': '72px',
      '9': '81px',
      '10': '90px',
      '12': '107px',
    }
  },
  plugins: [],
}

