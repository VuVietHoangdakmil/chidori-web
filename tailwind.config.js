/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/img/hero.jpg')",

      },
      colors: {
        'primary-color': "#936a4e",
        'primary-color-min-100': "#b88257",
        'primary-color-min-200': "#f9e4cd",
        'primary-color-min-300': "#FFF5EB",
        'color-text-primary': '#3E2613',
        'primary-color-rgba': "#3e261399",
        'primary-color-hover': 'rgb(98 68 47)',
        "color-text-blue": "#1B3765",
        'color-header': "#fff"
      },
      width: {
        'width-primary': "1150px"
      },
    },



  },
  plugins: [],
}

