const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',        // Scan JS/JSX files in the "pages" directory and subdirectories
    './hooks/**/*.{js,jsx}',       // Scan JS/JSX files in the "hooks" directory
    './utils/**/*.{js,jsx}',       // Scan JS/JSX files in the "utils" directory
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
    plugin(({ addUtilities }) => {
      addUtilities({
        '.text-shadow-xl': {
          textShadow: '1px 1px 3px rgb(0 0 0 / 29%), 2px 4px 7px rgb(73 64 125 / 35%)',
        },
      });
    }),
  ],
};
