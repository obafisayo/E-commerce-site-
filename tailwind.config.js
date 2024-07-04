/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(14 165 233)",
        secondary: "#F5F5F5",
        brandYellow: "#fdc62e",
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee",
        brandRed: "#DB4444",
      },
      container: {
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm: "2rem"
        }
      },
    },
  },
  plugins: [],
};
