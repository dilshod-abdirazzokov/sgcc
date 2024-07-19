/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'green': '#5BB543',
      'blue': '#0099d3',
      'ung-orange': '#ec7d1f',
      'yellow': '#DAE021',
      'yellowLine': '#B1BE04',
      'orange': '#F6B613',
      'darkBlue': '#2C2E47',
      'white': '#fff',
      'whiter':'#F8F8F8',
      'grayer':'#F0F8ED',
      'bluer':'#f2f8fb',
      'gold':'#FFD700',
      'formal':"#265073"
    },
  },
  plugins: [
    require('daisyui'),
    require("tailgrids/plugin")
  ],
}