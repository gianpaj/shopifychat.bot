/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#00f5d4',
        secondary: '#7b2cbf',
        dark: '#0a0a0f',
        'dark-light': '#1a1a2e',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px #00f5d4, 0 0 20px #00f5d4' },
          '50%': { boxShadow: '0 0 10px #00f5d4, 0 0 30px #00f5d4' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}