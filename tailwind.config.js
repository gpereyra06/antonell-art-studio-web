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
          DEFAULT: '#1B7A85',
          dark: '#16656F',
          light: '#4ECDC4',
        },
        secondary: {
          DEFAULT: '#2D9CDB',
          dark: '#1B7A85',
          light: '#80D3D4',
        },
        accent: '#4ECDC4',
        complement: '#F7E7CE',
        background: {
          DEFAULT: '#1a1a2e',
          light: '#115058',
          primary: '#FDFCF8',
          secondary: '#F9F7F1',
        },
        text: {
          DEFAULT: '#ffffff',
          muted: '#ADB5BD',
          primary: '#2C3E50',
          secondary: '#5D6D7E',
        },
        turquoise: {
          50: '#E6F7F7',
          100: '#B3E5E6',
          200: '#80D3D4',
          300: '#4ECDC4',
          400: '#2BB3AA',
          500: '#2D9CDB',
          600: '#1B7A85',
          700: '#16656F',
          800: '#115058',
        },
        glass: 'rgba(78, 205, 196, 0.1)',
        border: 'rgba(78, 205, 196, 0.2)',
        success: '#27AE60',
        warning: '#F39C12',
        error: '#E74C3C',
        info: '#2D9CDB',
        gold: '#D4AF37',
      },
    },
  },
  plugins: [],
};