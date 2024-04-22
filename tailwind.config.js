/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
      colors: {
        primary: "#717fe0; ",
        secondary: "#f3f3f3",
        third: "#f03e3e",
      },
    },
    plugins: [require("@tailwindcss/forms")],
  },
};
