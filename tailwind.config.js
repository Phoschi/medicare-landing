/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        medicare: {
          blue:      '#1e4db7',
          'blue-dark': '#152f7a',
          'blue-light': '#dbeafe',
          teal:      '#0d9488',
          'teal-light': '#ccfbf1',
          green:     '#10b981',
          'green-light': '#d1fae5',
          gray:      '#64748b',
          'gray-light': '#f8fafc',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0369a1 100%)',
        'section-gradient': 'linear-gradient(180deg, #f8fafc 0%, #eff6ff 100%)',
      },
    },
  },
  plugins: [],
}
