/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandPurple: "#7700ff",
        brandAqua: "#00ffff",
        brandBlack: "#0b0b0b",
        brandPink: "#ff00aa",
      },
      keyframes: {
        breathe: {
          '0%, 100%': { filter: 'drop-shadow(0 0 0px rgba(0,255,255,0.0))' },
          '50%': { filter: 'drop-shadow(0 0 12px rgba(0,255,255,0.4))' },
        },
        floaty: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      },
      animation: {
        breathe: 'breathe 3.5s ease-in-out infinite',
        floaty: 'floaty 8s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};