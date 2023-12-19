/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.{js,ts}",
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
        flip: "-1",
      },
      fontFamily: {
        Merriweather: ["Merriweather", "serif"],
        Cinzel: ["Cinzel", "serif"],
        Laila: ["Laila", "serif"],
        Newsreader: ["Newsreader", "serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
