/** @type {import('tailwindcss').Config} */
import color from "./src/color"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/img/grey/5b.jpg')",

      },
      colors: {
        // 'primary-color': "#936a4e",
        // 'primary-color-min-100': "#b88257",
        // 'primary-color-min-200': "#f9e4cd",
        // 'primary-color-min-300': "#FFF5EB",
        // 'color-text-primary': '#3E2613',
        // 'primary-color-rgba': "#3e261399",
        // 'primary-color-hover': 'rgb(98 68 47)',
        // "color-text-blue": "#1B3765",
        // 'color-header': "#fff",
        // "color-text-primary-100": "#d92706",

        // 'primary-color-2': color["primary-color-2"],
        // 'primary-color-2-min-100': color["primary-color-2-min-100"],
        // 'primary-color-2-min-200': "#e8f3fd",

        // "text-black-custome": "#262626",
        // "text-black--custome-min-100": "#404040"


        'primary-color': "rgb(75 85 99)",
        'primary-color-min-100': "rgb(107 114 128)",
        'primary-color-min-200': "rgb(229 231 235)",
        'primary-color-min-300': "rgb(249 250 251)",
        'color-text-primary': 'rgb(31 41 55)',
        'primary-color-rgba': "#36343299",
        'primary-color-hover': 'rgb(98 68 47)',
        "color-text-blue": "#1B3765",
        'color-header': "#fff",
        "color-text-primary-100": "rgb(107 114 128)",

        'primary-color-2': 'var(--primary-color-2)',
        'primary-color-2-min-100': 'var(--primary-color-2-min-100)',
        'primary-color-2-min-200': 'var(--primary-color-2-min-200)',
        'primary-color-2-min-300': 'var(--primary-color-2-min-300)',
        "text-black-custome": "#262626",
        "text-black--custome-min-100": "#404040"

      },
      width: {
        'width-primary': "1200px",
        'width-desktop': "1500px",
        'width-footer': "1250px"
      },
    },



  },
  plugins: [],
}

