/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',  // To scan all pages
    './components/**/*.{js,ts,jsx,tsx}', // To scan all components
    './src/app/**/*.{js,ts,jsx,tsx}', // For the app directory (if applicable)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
