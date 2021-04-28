// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["{app,pages}/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  important: false,
  separator: ":",
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
