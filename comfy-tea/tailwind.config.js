/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette cozy rose/beige gourmande
        'cream-light': '#FBF7F4',
        'cream': '#F5EDE6',
        'beige': '#E8DFD5',
        'peach-light': '#F5D4C4',
        'peach': '#EFC4B0',
        'peach-dark': '#E8936D',
        'rose-light': '#F4E4E8',
        'rose': '#E8C9D8',
        'rose-warm': '#E8B5C9',
        'rose-dusty': '#D4A5B8',
        'rose-dark': '#C08BA3',
        'orange-light': '#F5A967',
        'orange': '#E89968',
        'orange-dark': '#D47847',
        'mauve': '#D4A5BA',
        'chocolate': '#8B6F47',
        'coffee': '#A0826D',
        'matcha': '#7BA878',
        'caramel': '#C9A66A',
        'gold': '#D4AF37',
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
