/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fading: "fade 4s ease-in-out infinite alternate",
      },
      keyframes: {
        fade: {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
          "50%": {
            transform: "translateY(0%)",
            opacity: "100%",
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: "100%",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
