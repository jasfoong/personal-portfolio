/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sansMono: ['"Google Sans Mono"', 'monospace'],
        sans: ['"Google Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

