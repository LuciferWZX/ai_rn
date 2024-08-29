/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        card: {
          DEFAULT: '#252836',
        },
        primary: {
          DEFAULT: '#2563eb',
          900: '#1e3a8a',
          800: '#1e40af',
          700: '#1d4ed8',
          600: '#2563eb',
          500: '#3b82f6',
        },
        secondary: {
          DEFAULT: '#6d28d9',
          100: '#6d28d9',
          200: '#4c1d95',
        },
      },
    },
  },
  plugins: [],
}
