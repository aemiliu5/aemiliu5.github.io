/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',        // Scan JS/JSX files in the "pages" directory and subdirectories
    './components/**/*.{js,jsx}',  // Scan JS/JSX files in the "components" directory and subdirectories
    './styles/*.css',              // Correct glob pattern for styles
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors here, if any
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),         // Add scrollbar styling
    require('tailwindcss-textshadow'),    // Add text-shadow styling
  ],
};
