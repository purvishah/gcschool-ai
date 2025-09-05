// tailwind.config.js
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./client/**/*.{ts,tsx,js,jsx}",
    "./client-vue/**/*.{vue,ts,js}",
  ],
  plugins: [
    require("tailwindcss-animate"),
  ],
};
