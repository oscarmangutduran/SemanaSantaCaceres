/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/cruz.jpg')",
        opacity: 0.5,
      },
      colors: {
        "lila-claro": "#7C5CDA",
      },
    },
  },
  plugins: [],
};
