/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        black: "#232536",
        secondary: "#000000",
        gray: "#5D5F6D",
        darkBlue: "#232536",
        lightBlue: "#666DFF",
        orange: "#FFA155",
        lightOrange: "#FFD3AF",
        primary: "#444CFC",
        lightCyan: "#ECF8F9",
        chalk: "#FFE6D2",
        neutral: "#ffffff0f",
        veryDim: "#2325362b",
        lightPurple: "#F9F9FF",


      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        semibold: 500,  
        bold: 600,
      },
      boxShadow: {
        edgeCard: "0px 4px 4px #0000000d",
        contactCard: "0px 4px 4px #0000000d",
        scrollBtn: "0px 5px 7px #0000003d",
        sendBtb:"0px 4px 8px 0000000d",
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      smd: "880px",
      md: "1060px",
      lg: "1200px",
      xl: "1440px",
    },
  },
  plugins: [],
};
