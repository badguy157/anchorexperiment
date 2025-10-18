import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest': '#0F3D2E',
        'brass': '#C6A15B',
        'cream': '#F7F3EB',
        'brown': '#3B2C22',
        'offwhite': '#FAFAF8',
      },
      fontFamily: {
        'heading': ['var(--font-cormorant)', 'serif'],
        'body': ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
