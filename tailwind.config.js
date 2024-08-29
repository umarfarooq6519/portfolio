/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // ############# font family
      fontFamily: {
        display: "Chillax, sans-serif",
        body: "General Sans, sans-serif",
      },
      // ############## color pallete
      colors: {
        primary: "#222222", //dark
        secondary: "#EEEEEE", //light
      },
    },
  },
  plugins: [],
};
