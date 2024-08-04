/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "rgb(37,47,99)",
        partner: "rgb(5,15,67)",
        intro: "rgb(42,59,67)",
        footer: "rgb(5,13,57)",
      },
    },
  },
  plugins: [],
};
