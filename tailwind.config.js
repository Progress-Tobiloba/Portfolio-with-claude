/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#050B14',
        cobalt: '#04326D',
        'mist-blue': '#B2BED6',
        'safety-orange': '#F58F20',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
      },
      letterSpacing: {
        tighter: '-0.02em',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        'safe': 'clamp(1rem, 5vw, 3rem)',
      },
    },
  },
  plugins: [],
};
