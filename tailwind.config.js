/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#7ec33e4d",
        secondary: "#DBFEBA",
        base: "#7EC33E",
        neutral: "#26A69A",
        semiNeutral: "#26a69a99",
        gray: "#818181",
        black: "#292929",
        white: "#FFFFFF",
        light: "#c1c7c626",
        bodyColor: "#f5f5f5s",
        veryDim: "#F5F5F5",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        semibold: 600,  
        bold: 700,
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
