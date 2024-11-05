module.exports = {
    plugins: [require("prettier-plugin-tailwindcss")],
    theme: {
        extend: {
          backgroundImage: {
            'custom-gradient': 'linear-gradient(98deg, #60BBEE 0.33%, #0A72AD 93.35%)',
          },
        },
      },
}; 
  