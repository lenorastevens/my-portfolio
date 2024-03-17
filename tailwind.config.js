/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
    colors: {
      'black': '#000',
      'white': '#fff',
      'cyan': {
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
        950: '#083344',
      },
      'rose': {
        100: '#ffe4e6',
        200: '#fecdd3',
        300: '#fda4af',
        400: '#fb7185',
      },  
      'pink': '#db2777',
      'gray': '#4b5563',
    },
    plugins: [],
  }
}
