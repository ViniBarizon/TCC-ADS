/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nice-green': '#3FCF97',
      },
      backgroundImage: {
        'nav-dogs': "url('/src/assets/images/made_for_all_adventurers_1600x.jpg')",
      }
    },
  },
  plugins: [],
}

