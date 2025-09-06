/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: { '0%': { opacity: 0, transform: 'translateY(10px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        bgSlide: { '0%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' }, '100%': { backgroundPosition: '0% 50%' } },
        wiggle: { '0%,100%': { transform: 'rotate(-10deg)' }, '50%': { transform: 'rotate(10deg)' } },
        bounceEmoji: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-5px)' } },
        bounceSlow: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        bounceSlower: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-5px)' } },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'bg-slide': 'bgSlide 10s ease infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'bounce-emoji': 'bounceEmoji 1s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 6s ease-in-out infinite',
        'bounce-slower': 'bounceSlower 8s ease-in-out infinite',
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
      boxShadow: {
        'neon': '0 0 10px rgba(255,255,255,0.6), 0 0 20px rgba(255,255,255,0.4)',
      },
      textShadow: {
        'neon': '0 0 8px rgba(255,255,255,0.7)',
      },
    },
  },
  plugins: [],
};
