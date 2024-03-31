import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Jost Variable"', 'sans-serif'],
      },
      colors: {
        'base-heading': '#3A4374',
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#AD1FEA',
          'secondary': '#4661E6',
          'accent': '#F49F85',
          'info': '#62BCFA',
          'neutral': '#373F68',
          'base-100': '#F7F8FD',
          'base-content': '#647196',

          '--rounded-btn': '10px',
          '--rounded-box': '10px',
        },
      },
    ],
  },
}
