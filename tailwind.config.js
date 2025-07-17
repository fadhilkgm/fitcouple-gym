/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#00ff88',
        'dark-green': '#00cc6a',
        'light-gray': '#1a1a1a',
        'medium-gray': '#333333',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4))',
        'btn-gradient': 'linear-gradient(135deg, #00ff88, #00cc6a)',
      },
      boxShadow: {
        'green-glow': '0 0 30px rgba(0, 255, 136, 0.6)',
        'green-light': '0 0 15px rgba(0, 255, 136, 0.4)',
        'btn-hover': '0 10px 25px rgba(0, 255, 136, 0.3)',
        'card-hover': '0 20px 40px rgba(0, 255, 136, 0.1)',
        'image-shadow': '0 20px 40px rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}