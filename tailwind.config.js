module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-pause': 'spin-pause 10s linear infinite', // Анимация с остановкой каждые 6 секунд
      },
      keyframes: {
        'spin-pause': {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(180deg)' }, // Оставаться на месте в течение второй половины цикла
        },
      },
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Указываем пути к файлам, где используются утилиты Tailwind
  ],
  plugins: [],
};
