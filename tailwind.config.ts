import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#0F3D2E',
        brass: '#C6A15B',
        stone: '#D7CBB3',
        timber: '#3B2C22',
        parchment: '#FAF7F0',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        ui: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 30px rgba(32, 28, 24, 0.08)',
      },
      borderRadius: {
        xl: '0.9rem',
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
};
export default config;
