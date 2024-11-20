/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',      // Scan JS/JSX files in the "pages" directory and subdirectories
    './components/**/*.{js,jsx}', // Scan JS/JSX files in the "components" directory and subdirectories
  ],
  theme: {
    extend: {
      colors: {
        multitoolsGreen: '#00a69c', // Replace with your desired color
      },
    },
  },
  plugins: [],
}
