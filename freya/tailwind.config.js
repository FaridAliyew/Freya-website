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
        'banner_1':'url("./images/banner-1.png")',
        'banner_2':'url("./images/banner-2.png")',
      },
      height: {
        'custom': '100vh',
        'custom2':'550px',
      },
      fontSize: {
        'custom':'20px',
        'custom2':'80px'
      },
      width:{
        'custom':'750px'
      }
    },
  },
  plugins: [],
}

