/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        black: "#232536",
        teamBg: "#232536f2",
        veryDimBlack: "#22243499",
        veryLightBlack: "#2325362B",
        veryLightBlack2: "#22243433",
        veryDimBlack2: "#23253699",
        secondary: "#000000",
        gray: "#5D5F6D",
        darkBlue: "#232536",
        lightBlue: "#666DFF",
        orange: "#FFA155",
        lightOrange: "#FFD3AF",
        lightOrange2: "#FFD3AF91",
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
      dropShadow: {
        "serviceCard": "0px 50px 60px #ffa15559",
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
