/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      'noto': ['Noto Sans TC', 'sans-serif'],
      'jost': ['Jost', 'sans-serif']
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
      },
      'white': {
        DEFAULT: '#FFFFFF'
      }
    },
    fontSize: {
      'tiny': '0.75rem', //12
      'xs': '0.875rem', //14
      'base': '1rem',
      'sm': '1.125rem', //18
      'md': '1.5rem',  //24
      'lg': '1.75rem', //28
      'xl': '1.875rem', //30
      '2xl': '2.5rem', //40
      '3xl': '3.125rem',   //50
      '4xl': '5rem',   //80
      '5xl': '6.25rem' //100
    },
    extend: {
      spacing: {
        '15': '3.75rem',
        '37.5': '9.375rem'
      },
      letterSpacing: {
        'extensive': '0.3em'
      }
    },
  },
  plugins: [],
}

