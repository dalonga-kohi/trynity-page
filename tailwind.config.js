/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0B0C10",
        blue: "#66FCF1",
        white: "#C5C6C7",
      },
    },
  },
  plugins: [],
}