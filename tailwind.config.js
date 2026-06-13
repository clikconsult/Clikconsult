/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0BCEAF',
        'primary-dark': '#09A98E',
        dark: '#0A0F1A',
        'dark-2': '#111827',
        'dark-3': '#1A2235',
        light: '#F8FAFC',
        muted: '#6B7280',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
