/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          siri: ['Sirichana', 'sans-serif'],
        },
        colors: {
          primary: '#fff',
          accent: '#7b80ff',
          main: '#1f2630',
          black: '#000000',
          white: '#ffffff',
          danger: '#F75555',
          background: '#000000',
          foreground: '#ffffff',
          card: '#1f2630',
          'card-foreground': '#ffffff',
          border: 'rgba(255, 255, 255, 0.1)',
          input: 'rgba(255, 255, 255, 0.15)',
          ring: '#7b80ff',
        },
        borderRadius: {
          'xs': '0.125rem',
          'sm': '0.25rem',
          'md': '0.5rem',
          'lg': '1rem',
          'xl': '1.5rem',
          '2xl': '2rem',
        },
        boxShadow: {
          'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        },
      },
    },
    plugins: [],
  } 