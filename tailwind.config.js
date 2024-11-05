/** @tyzpe {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        "tomato-custom": 'hsl(4, 100%, 67%)',
        'dark-slate-grey': 'hsl(234, 29%, 20%)',
        'charcoal-grey': 'hsl(235, 18%, 26%)',
        "grey-custom": 'hsl(231, 7%, 60%)',
      },
    },
  },
  plugins: [],
}

