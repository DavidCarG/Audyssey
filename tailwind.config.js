/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#FFFFFF", // "black"
        "secondary-bg": "#10537d",
        "component-bg": "#B7D1F9",
        "contrast-bg": "white",
        "primary-text": "#FFFFFF", // "white"
        "secondary-text": "#000000", // "black"
        "progress-bar": "#647680",
        "controls-bg": "rgb(248 250 252)",
        "profile-icon": "rgb(168 85 247)",
        "album-hover": "#ffffff26",
        "album-desc": "#0D3D5A",
        "playlist-info": "#a7a7a7",
        "song-hover": "#ffffff26",
      },
    },
  },
  plugins: [],
};
