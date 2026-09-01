/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#5C1A33',
          light: '#8B2252',
          dark: '#3A0F20',
          glow: '#C4527A',
        },
        slate: {
          blue: '#6B8BA4',
          light: '#9BB5C8',
          dark: '#3D5A70',
        },
        surface: {
          DEFAULT: '#121218',
          raised: '#1A1A24',
          overlay: '#22222E',
        },
        base: '#0A0A0F',
        cream: '#E8E4E0',
        muted: '#9C9A97',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-up': 'slideUp 0.8s ease forwards',
        'typewriter': 'typewriter 3s steps(40) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) rotate(1deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(92, 26, 51, 0.4)' },
          '50%': { boxShadow: '0 0 60px rgba(139, 34, 82, 0.8), 0 0 100px rgba(92, 26, 51, 0.4)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-mesh': 'radial-gradient(ellipse at 20% 50%, rgba(92,26,51,0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(107,139,164,0.2) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
}
