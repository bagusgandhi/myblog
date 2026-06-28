/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a2e',
        accent: {
          DEFAULT: '#00aaa1',
          light: '#cceeec',
          dark: '#007c85',
        },
        yellow: {
          DEFAULT: '#f4d06f',
          light: '#f8edd0',
          dark: '#daa512',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: '#00aaa1',
              '&:hover': {
                color: '#007c85',
              },
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
        invert: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: '#cceeec',
              '&:hover': {
                color: '#00aaa1',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
