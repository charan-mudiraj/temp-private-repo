/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primary: "#171717",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        pjs: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
