import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0a0a0a',
          secondary: '#141414',
          tertiary: '#1a1a1a',
        },
        surface: {
          DEFAULT: '#1a1a1a',
          hover: '#242424',
          active: '#2a2a2a',
        },
        text: {
          primary: '#f5f5f5',
          secondary: '#a3a3a3',
          tertiary: '#737373',
        },
        accent: {
          DEFAULT: '#3b82f6',
          hover: '#2563eb',
          light: '#60a5fa',
        },
        border: {
          DEFAULT: '#262626',
          light: '#333333',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        'display-1': ['5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-2': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-3': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-1': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading-2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.75', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
