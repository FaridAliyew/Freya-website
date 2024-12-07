/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header_1': 'url("./images/header-1.png")',
        'header_2': 'url("./images/header-2.png")',
        'header_3': 'url("./images/header-3.png")',
      },
      height: {
        'custom': '100vh'
      },
      fontSize: {
        'custom':'20px'
      }
    },
  },
  plugins: [],
}

