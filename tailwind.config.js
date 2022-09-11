/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F393A",
        secondary: "#FF9900",
        "dark-primary": "#20293d",
        "dark-secondary": "#101828",
        trending: "#06cc31",
      },
    },
  },
  plugins: [],
};
