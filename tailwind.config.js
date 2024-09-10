/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      slate: {
        300: "hsl(212, 45%, 89%)",
        500: "hsl(216, 15%, 48%)",
        900: "hsl(218, 44%, 22%)",
      },
      white: "#fff",
      black: "#000",
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
    borderRadius: {
      10: "10px",
      20: "20px",
    },
    lineHeight: {
      140: "140%",
      120: "120%",
    },
    extend: {},
  },
  plugins: [],
}
