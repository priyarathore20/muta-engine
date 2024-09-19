/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#00040F",
        blue: "#3ED5ED",
        shadowBlue: "#82F9FF",
        gradient1: "#6D6D6D",
        gradient2: "#11101D",
      },
      boxShadow: {
        custom: "0 0 3px #82F9FF",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        chakra: ["Chakra Petch", "sans-serif"],
      },
      screens:{
        xs: '585px',
        xxs: '360px',
      }
    },
  },
  plugins: [],
};
