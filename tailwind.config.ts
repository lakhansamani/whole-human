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
        brandGreen: '#556541',
        brandYellow: '#FFDF2B',
        brandLightGreen: '#EBF1E3',
        brandBackground: '#DACD9',
        // Add other colors based on the palette provided
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '1' }, // Full div height
        },
      },
      animation: {
        fall: 'fall 6s linear',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
export default config;
