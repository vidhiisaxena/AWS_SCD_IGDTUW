/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#03050c',
          900: '#050816', // Core dark navy
          850: '#070b1e',
          800: '#0d1330',
          700: '#151e48',
        },
        aws: {
          purple: '#8B5CF6',
          purpleLight: '#A855F7',
          purpleDark: '#6D28D9',
          blue: '#00F0FF',
          blueElectric: '#0284C7',
          pink: '#FF007A',
          magenta: '#EC4899',
          orange: '#FF7A00',
          coral: '#FF5722',
          amber: '#FF9900',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Outfit', 'sans-serif'],
        heading: ['"Outfit"', 'sans-serif'],
        body: ['Inter', '"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(139, 92, 246, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.08) 1px, transparent 1px)",
        'grid-pattern-dense': "linear-gradient(to right, rgba(0, 240, 255, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 240, 255, 0.06) 1px, transparent 1px)",
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
