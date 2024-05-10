/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#000000", // "black"
        "secondary-bg": "#121212",
        "component-bg": "#242424",
        "contrast-bg": "white",
        "primary-text": "#FFFFFF", // "white"
        "progress-bar": "rgb(63 98 18)",
        "controls-bg": "rgb(248 250 252)",
        "profile-icon": "rgb(168 85 247)",
      },
    },
  },
  plugins: [],
};
