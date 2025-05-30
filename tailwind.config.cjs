/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#212032",
        secondary: "#D1D1D1",
        darkBlue: "#30324C",
      },
    },
  },
  variants: {
    extends: {
      backgroundColor: ["active"],
    },
  },
};
