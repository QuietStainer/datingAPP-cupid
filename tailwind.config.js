/** @type {import('tailwindcss').Config} */
import animated from 'tailwindcss-animated';

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    animated
  ],
}
