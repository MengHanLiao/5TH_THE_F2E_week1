/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
    },
    colors: {
      'orange': {
        light: '#F1A864',
        DEFAULT: '#EA7F1B',
      },
      'brown': {
        light: '#845428',
        DEFAULT: '#45280D'
      },
      'gray': {
        300: '#DFDFDF',
        400: '#9C9C9C',
        500: '#858585',
        600: '#505050'
      }
    },
    fontFamily: {
      'noto': ['Noto Sans TC', 'sans-serif'],
      'jost': ['Jost', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

