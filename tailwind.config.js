/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#333a56",
        btntextclr: "#b1b9c3",
        secondarybg: "#a0a3af",
        btnclr: "#4f5b8a",
        activelink: "#03002e",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
