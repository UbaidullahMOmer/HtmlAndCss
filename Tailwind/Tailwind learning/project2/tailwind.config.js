/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(98deg, #60BBEE 0.33%, #0A72AD 93.35%)',
      },
    },
  },
  plugins: [],
}