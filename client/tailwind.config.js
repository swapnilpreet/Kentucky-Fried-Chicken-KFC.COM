/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       
    },
    screens: {
      'mobile': '359px',
      'mb': {'max': '590px'},
      'tablet': '767px',
      'tb': {'max': '999px'},
      // => @media (min-width: 640px) { ... }
      'laptop': '1180px',
      'lg': {'max': '1041px'},
      // => @media (min-width: 1024px) { ... }
      'desktop': '1208px',
      'dt': {'min': '998px'},
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
  corePlugins:{
    preflight:false,
  }
}

