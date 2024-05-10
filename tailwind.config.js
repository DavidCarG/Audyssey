/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#000000", // "black"
        "secondary-bg": "#121212",
        "component-bg": "#242424",
        "primary-text": "#FFFFFF", // "white"
      },
    },
  },
  plugins: [],
};
