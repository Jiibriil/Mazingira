/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D0F2DF",
        secondary: "#2493BF",
        tertiary: "#038C33",
        quaternary: "#06BF47",
        quinary: "#0D0D0D",
      },
      scale: {
        "-1": "-1",
      },
    },
  },
  plugins: [],
};
