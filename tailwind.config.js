/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Greens - Primary
        'primary-green': '#22C55E',
        'primary-dark': '#16A34A',
        'primary-light': '#4ADE80',
        'secondary-green': '#15803D',
        'secondary-dark': '#166534',
        // Blues - Secondary
        'primary-blue': '#3B82F6',
        'primary-blue-dark': '#2563EB',
        'primary-blue-light': '#60A5FA',
        'secondary-blue': '#1D4ED8',
        'secondary-blue-dark': '#1E40AF',
        'accent-blue': '#0EA5E9',
        'accent-sky': '#38BDF8',
        // Backgrounds - Dark blue-green
        'bg-primary': '#0A1628',
        'bg-secondary': '#0F1E32',
        'bg-card': '#162236',
        // Text
        'text-primary': '#FFFFFF',
        'text-secondary': '#94A3B8',
        'text-muted': '#64748B',
        // Accents
        'accent-gold': '#F59E0B',
        'accent-lime': '#84CC16',
        'accent-emerald': '#10B981',
        'accent-green': '#10B981',
        'accent-purple': '#8B5CF6',
        'accent-cyan': '#06B6D4',
      },
      fontFamily: {
        display: ['Clash Display', 'Poppins', 'sans-serif'],
        body: ['Inter', 'DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #22C55E 0%, #16A34A 50%, #15803D 100%)',
        'gradient-card': 'linear-gradient(180deg, rgba(34,197,94,0.1) 0%, transparent 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(34, 197, 94, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(34, 197, 94, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}
