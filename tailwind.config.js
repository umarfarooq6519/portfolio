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
        primary: "#1C1C1C", //dark
        secondary: "#FFFFFF", //light
      },
      // ############## container
      container: {
        center: true,
        screens: {
          "2xl": "1800px",
        },
      },
      // ############## custom screens
      screens: {
        xs: "400px",
        fhd: "1920px",
      },
    },
  },
  plugins: [],
};
