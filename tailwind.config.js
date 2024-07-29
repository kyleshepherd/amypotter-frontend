/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#161310",
      white: "#EBEBEB",
      gray: "#787878",
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        display: ["Gambarino", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
