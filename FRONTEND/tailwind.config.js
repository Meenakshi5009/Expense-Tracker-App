/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#875cf5',
        blue: {
          50: '#eff6ff',
          600: '#2563eb',
        },
        green: {
          50: '#f0fdf4',
          600: '#16a34a',
        },
        red: {
          50: '#fef2f2',
          600: '#dc2626',
        },
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}
