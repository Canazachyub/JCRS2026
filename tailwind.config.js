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
        primary: {
          red: '#DC2626',
          dark: '#991B1B',
        },
        secondary: {
          blue: '#1E40AF',
          dark: '#1E3A8A',
        },
        bg: {
          primary: '#0F0F0F',
          secondary: '#1A1A1A',
          card: '#252525',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A1A1A1',
          muted: '#6B6B6B',
        },
        accent: {
          gold: '#F59E0B',
          green: '#10B981',
          purple: '#8B5CF6',
        }
      },
      fontFamily: {
        display: ['Clash Display', 'Poppins', 'sans-serif'],
        body: ['Inter', 'DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #DC2626 0%, #991B1B 50%, #1E40AF 100%)',
        'gradient-card': 'linear-gradient(180deg, rgba(220,38,38,0.1) 0%, transparent 100%)',
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
          '0%': { boxShadow: '0 0 5px rgba(220, 38, 38, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(220, 38, 38, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}
