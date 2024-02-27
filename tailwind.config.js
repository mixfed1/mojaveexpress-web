/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
     animation: {
      'gradient': 'gradient 4s linear infinite',
      "background-shine": "background-shine 2s linear infinite",
      "border-width": "border-width 3s infinite alternate",
     },
     "keyframes": {
      "border-width": {
        "from": {
          "width": "10px",
          "opacity": "0"
        },
        "to": {
          "width": "100px",
          "opacity": "1"
        }
      },

      'gradient': {
        to: { 'background-position': '200% center' },
      },
      
      "background-shine": {
        "from": {
          "backgroundPosition": "0 0"
        },
        "to": {
          "backgroundPosition": "-200% 0"
        }
      }
    }

  },
  
  plugins: [],
}
