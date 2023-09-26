/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#202426",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
