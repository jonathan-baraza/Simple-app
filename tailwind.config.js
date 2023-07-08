/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mt_thin: ["mrt-thin"],
        mt_mid: ["mrt-mid"],
        mt_semi: ["mrt-semi"],
        mt_bold: ["mrt-bold"],
        mt_xbold: ["mrt-xbold"],
      },
    },
  },
  plugins: [],
};
