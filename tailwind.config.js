/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
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
        100: '#cffafe',
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
      'orange': '#f97316',
      'blue': {
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
      },  
      'yellow': '#eab308',
      'sky': '#7dd3fc',
      'fuchsia': {
        500: '#d946ef',
        700: '#a21caf',
      },
      'gray': '#9ca3af',
    },
  },
  plugins: [],
}