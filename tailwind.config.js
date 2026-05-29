/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
      colors: {
        ink: "#111317",
        paper: "#f6f1e8",
        mist: "#d8ded8",
        brass: "#a56b2f",
        pine: "#25443a",
        clay: "#c75f3c",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(17, 19, 23, 0.16)",
      },
    },
  },
  plugins: [],
};
