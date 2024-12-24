import React, { useState, useEffect } from 'react';
import background from '../assets/background_5.jpg';
import prizeBox from '../assets/56867 1.svg';
import coinIcon from '../assets/Rectangle 7.svg';
import starIcon from '../assets/Rectangle 7-2.svg';
import NavBar from '../components/NavBar';

const FrensPage = () => {
  const [rewards, setRewards] = useState(0); // Награды пользователя
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [error, setError] = useState(null); // Ошибки
  const apiBaseUrl = 'https://api.example.com'; // Замените на ваш API

  // Загрузка данных при загрузке компонента
//   useEffect(() => {
//     const fetchRewards = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`${apiBaseUrl}/user/rewards`);
//         if (!response.ok) throw new Error('Ошибка загрузки данных');
//         const data = await response.json();
//         setRewards(data.totalRewards); // Установка наград из ответа API
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRewards();
//   }, []);
useEffect(() => {
    // Заменить временными данными
    setRewards(0); // Пример: вручную задайте награды
    setLoading(false); // Убедитесь, что страница загружается
  }, []);
  

  // Обработчик кнопки Share
  const handleShare = () => {
    alert('Sharing your invite link...'); // Реализуйте логику, связанную с бекендом
  };

  if (loading) {
    return (
      <div className="min-h-[956px] flex items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white">
        <p className="text-lg font-bold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[956px] flex items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white">
        <p className="text-lg font-bold text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-[956px] bg-cover text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Основной контент */}
      <div className="flex flex-col items-center text-center pt-16 px-6">
        {/* Заголовок с иконкой коробки */}
        <p className="text-4xl font-bold">Total rewards</p>
        <img src={prizeBox} alt="Prize Box" className="w-[120px] h-[120px] mt-4" />
        <p className="text-5xl font-bold mt-2">{rewards.toLocaleString()}</p>

        {/* Карточки приглашений */}
        <div className="mt-8 space-y-4 w-full max-w-[360px]">
        <p className="text-md text-left mt-6">
          Invite frens to get <span className="text-yellow-400">bonus</span>
        </p>
          {/* Первая карточка */}
          <div className="flex items-center bg-blue-950/50 p-4 rounded-2xl border border-[#567db5] shadow-md">
            <img src={coinIcon} alt="Invite Fren" className="w-12 h-12" />
            <div className="ml-4 text-left">
              <p className="text-md font-semibold">Invite Fren</p>
              <p className="text-sm mt-2 text-gray-300">
                <span className="text-yellow-400 font-bold">25,000</span> for you and fren
              </p>
            </div>
          </div>

          {/* Вторая карточка */}
          <div className="flex items-center bg-blue-950/50 p-4 rounded-2xl border border-[#567db5] shadow-md">
            <img src={starIcon} alt="Invite Fren with Premium" className="w-12 h-12" />
            <div className="ml-4 text-left">
              <p className="text-md font-semibold">Invite Fren with Telegram Premium</p>
              <p className="text-sm mt-2 text-gray-300">
                <span className="text-yellow-400 font-bold">50,000</span> for you and fren
              </p>
            </div>
          </div>
        </div>

        {/* Кнопка Share */}
        <button
          onClick={handleShare}
          className="mt-44 bg-gradient-to-r from-blue-500 to-blue-700 px-16 py-2 rounded-xl text-white text-lg font-bold shadow-md"
        >
          Share
        </button>
      </div>

      {/* Навигационная панель */}
      <NavBar />
    </div>
  );
};

export default FrensPage;
