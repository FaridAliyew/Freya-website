/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header_1': 'url("./images/header-1.png")'
      },
      height: {
        'custom': '100vh'
      }
    },
  },
  plugins: [],
}

