module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors:{
        'golden': '#FFEBE2',
        'btn-grad': '#ff8080'
      },
      fontFamily:{
        Lora: ['Lora', 'serif'],
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
