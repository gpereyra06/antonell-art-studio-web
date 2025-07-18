module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#d4af37',
          dark: '#b8941f',
        },
        secondary: '#8b4513',
        background: {
          DEFAULT: '#1a1a2e',
          light: '#16213e',
        },
        text: {
          DEFAULT: '#ffffff',
          muted: '#cccccc',
        },
        glass: 'rgba(255, 255, 255, 0.1)',
        border: 'rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
};