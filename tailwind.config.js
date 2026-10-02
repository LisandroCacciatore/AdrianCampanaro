/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          title: '#2C343C',
          body: '#5A6672',
          muted: '#7A8794',
        },
        brand: {
          DEFAULT: '#4A6770',
          hover: '#3D545C',
          dark: '#1F272F',
          soft: '#F0F4F6',
        },
        accent: '#4169E1',
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F7F8FA',
          muted: '#F0F3F5',
        },
        line: {
          DEFAULT: '#E3E6EA',
          strong: '#C9D2D9',
        },
        wa: {
          btn: '#25D366',
          header: '#0B6B5F',
          action: '#0F7B6C',
          actionHover: '#0B5C51',
          icon: '#0B3B2E',
          chat: '#E5DDD5',
        },
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        22: '5.5rem',
        '4.5': '1.125rem',
        '13.5': '3.375rem',
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        btn: '6px',
        card: '10px',
        container: '12px',
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        subtle: '0 4px 16px rgba(0, 0, 0, 0.05)',
        card: '0 12px 32px rgba(44, 52, 60, 0.08)',
        widget: '0 8px 24px rgba(0, 0, 0, 0.14)',
      },
    },
  },
  plugins: [],
};
