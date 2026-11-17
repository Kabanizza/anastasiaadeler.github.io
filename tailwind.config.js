/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        paper: "#F8F7F3",
        ink: "#141413",
        mute: "#57554F",
        obsidian: "#0F0F0E",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Garamond", '"Times New Roman"', "serif"],
        sans: ["Inter", '"Helvetica Neue"', "Arial", "sans-serif"],
      },
    },
  },
};
