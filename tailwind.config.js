/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mainfont: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        color1: "#23856D",
        color2: "#47AD97",
        color3: "#17213C",
        textColor: "#252B42",
        primaryColor: "#23A6F0",
        seconTextColor: "#737373",
        successColor: "#2DC071",
        lightTextGray: "#FAFAFA",
      },
      fontSize: {
        h1: ["58px", "font-extrabold"],
        h2: "40px",
      },
    },
  },
  plugins: [],
};
