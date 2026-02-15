import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        up: '#ef5350',
        down: '#26a69a',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;

