/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': 'Inter, sans-serif',
        'Ledger': 'Ledger, serif',
        'Lemon': 'Lemon, serif',
        'Abhaya-Libre': 'Abhaya Libre, serif',
        'Roboto': 'Roboto, sans-serif',
        'Inria-Serif': 'Inria Serif, serif'
      }
    },
  },
  plugins: [require("daisyui")],

}