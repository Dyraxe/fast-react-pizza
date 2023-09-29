/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto Mono, monospace",
      },
      screens: {
        tablet: "677",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
