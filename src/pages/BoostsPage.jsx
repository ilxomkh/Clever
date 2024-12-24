import React, { useState, useEffect } from 'react';
import handIcon from '../assets/hand.svg';
import batteryIcon from '../assets/battery.svg';
import enIcon from '../assets/energy.svg';
import rocketIcon from '../assets/rocket.svg';
import lightningIcon from '../assets/molniya.svg';
import robotIcon from '../assets/robot.svg';
import coinIcon from '../assets/coin.svg';
import background from '../assets/background_5.jpg';
import NavBar from '../components/NavBar';

const BoostsPage = () => {
  const [boosters, setBoosters] = useState([]);
  const [balance, setBalance] = useState(0); // Баланс пользователя
  const [loading, setLoading] = useState(true);
  const [selectedBooster, setSelectedBooster] = useState(null); // Выбранный бустер
  const [error, setError] = useState(null);

  const apiBaseUrl = 'https://api.example.com'; // Замените на ваш API

  // Загрузка данных о бустерах с сервера
//   useEffect(() => {
//     const fetchBoosters = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`${apiBaseUrl}/user/boosters`);
//         if (!response.ok) throw new Error('Ошибка загрузки данных');
//         const data = await response.json();
//         setBalance(data.balance);
//         setBoosters(data.boosters);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBoosters();
//   }, []);
useEffect(() => {
    // Временно используем статические данные для тестирования
    setTimeout(() => {
      setBalance(1000); // Тестовый баланс
      setBoosters([
        {
          id: 'multitap',
          name: 'Multitap',
          description: 'Amount value per coin +1 for each level',
          icon: handIcon,
          price: 100,
          level: 1,
        },
        {
          id: 'battery',
          name: 'Battery Pack',
          description: 'Increase total coin limit +500 for the next level',
          icon: batteryIcon,
          price: 100,
          level: 1,
        },
        {
          id: 'recharge',
          name: 'Recharge Speed',
          description: 'Increase coin fill speed +1/sec for each level',
          icon: lightningIcon,
          price: 100,
          level: 1,
        },
        {
          id: 'autobot',
          name: 'Auto Bot',
          description:
            'Upgrade to 1 lvl - Automatic collection will start after 10 min of inactivity, with a max working duration of 3 hours',
          icon: robotIcon,
          price: 20000,
          level: 1,
        },
      ]);
    }, 500); // Симулируем задержку
  }, []);

  const closeModal = () => {
    setSelectedBooster(null);
  };
  

//   if (loading) {
//     return (
//       <div className="min-h-[956px] flex items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white">
//         <p className="text-lg font-bold">Loading...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-[956px] flex items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white">
//         <p className="text-lg font-bold text-red-500">Error: {error}</p>
//       </div>
//     );
//   }

  return (
    <div
      className={`relative min-h-[956px] bg-cover text-white`}
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Размытие фона при открытом модальном окне */}
      {selectedBooster && (
        <div className="absolute inset-0 backdrop-blur-md bg-black/50 z-50"></div>
      )}
      {/* Баланс пользователя */}
      <div className="text-center py-12">
        <p className="text-4xl font-bold">Your balance</p>
        <div className="flex justify-center items-center mt-2 mb-2">
          <img src={coinIcon} alt="Coin" className="w-[102px] h-[102px]" />
        </div>
        <p className="text-4xl font-bold mt-2 -mb-4">{balance.toLocaleString()}</p>
      </div>

      {/* Бесплатные бустеры */}
      <div className="px-4 text-center -mb-2">
        <div className='text-left'>
            <p className="text-md font-semibold ml-2">
          Free daily <span className="text-yellow-400">boosters</span>
        </p>
        </div>
        <div className="flex justify-center space-x-12 mt-4">
        <div className="text-center bg-[#0c254d] py-4 px-4 rounded-xl border border-[#567db5] w-[170px]">
          <p className="font-bold text-center text-md ml-11 text-gray-300 flex items-center">
  Turbo 
  <img src={rocketIcon} alt="Lightning Icon" className="w-7 h-7 ml-1 mt-1" />
</p>
            <p className="text-sm mt- text-gray-400">3/3 available</p>
          </div>
          <div className="text-center bg-[#0c254d] py-4 px-4 rounded-xl border border-[#567db5] w-[170px]">
          <p className="font-bold text-center text-md ml-5 text-gray-300 flex items-center">
  Full Energy 
  <img src={enIcon} alt="Lightning Icon" className="w-6 h-6 ml-1 mt-1" />
</p>
            <p className="text-sm mt-1 text-gray-400">3/3 available</p>
          </div>
        </div>
      </div>

      {/* Список бустеров */}
      <div className="mt-8 px-6 space-y-4">
      <p className=' text-md font-semibold'>Boosters</p>
        {boosters.map((booster) => (
          <div
            key={booster.id}
            className="flex items-center justify-between bg-[#0c254d] py-4 px-4 rounded-xl border border-[#567db5] shadow-md"
            onClick={() => setSelectedBooster(booster)}
          >
            <div className="flex items-center">
              <img src={booster.icon} alt={booster.name} className="w-[50px] h-[50px]" />
              <div className="ml-4 text-left">
                <p className="font-bold mb-2">{booster.name}</p>
                <p className="text-sm text-gray-300">
                  <span className="text-yellow-400">{booster.price.toLocaleString()}</span> | Lvl{' '}
                  {booster.level}
                </p>
              </div>
            </div>
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.72849 7.84658L2.15369 0.271927C1.97849 0.0965929 1.74462 0 1.49525 0C1.24588 0 1.01201 0.0965929 0.836816 0.271927L0.278985 0.82962C-0.0839998 1.19302 -0.0839998 1.78365 0.278985 2.14649L6.63973 8.50724L0.271927 14.875C0.0967313 15.0504 0 15.2841 0 15.5333C0 15.7828 0.0967313 16.0166 0.271927 16.192L0.829758 16.7496C1.00509 16.9249 1.23883 17.0215 1.4882 17.0215C1.73757 17.0215 1.97144 16.9249 2.14663 16.7496L9.72849 9.16803C9.9041 8.99214 10.0006 8.7573 10 8.50765C10.0006 8.25704 9.9041 8.02233 9.72849 7.84658Z" fill="#BFD4FF"/>
            </svg>

          </div>
        ))}
      </div>
        
    {/* Модальное окно */}
    {selectedBooster && (
        <div className="absolute top-[574px] inset-0 flex items-center justify-center z-50">
          <div className="bg-gradient-to-b from-[#112859] to-[#0E1B2E] p-6 rounded-t-3xl w-[440px] h-[382px] text-white relative border-t border-[#567db5]">
            <button
              className="absolute top-3 right-3 text-white text-lg"
              onClick={closeModal}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C9.62663 0 7.30655 0.703787 5.33316 2.02236C3.35977 3.34094 1.8217 5.21508 0.913451 7.4078C0.00519945 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693604 16.6689 1.83649 18.807 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9962 8.81855 22.7308 5.76849 20.4811 3.51886C18.2315 1.26924 15.1814 0.00375324 12 0ZM16.6276 15.0862C16.7318 15.1868 16.8149 15.3072 16.8721 15.4403C16.9293 15.5734 16.9594 15.7165 16.9606 15.8614C16.9619 16.0062 16.9343 16.1499 16.8794 16.2839C16.8246 16.418 16.7436 16.5398 16.6412 16.6422C16.5387 16.7447 16.4169 16.8257 16.2829 16.8805C16.1488 16.9354 16.0051 16.963 15.8603 16.9617C15.7154 16.9605 15.5723 16.9304 15.4392 16.8732C15.3061 16.816 15.1857 16.7329 15.0851 16.6287L12 13.5425L8.91491 16.6287C8.70916 16.8274 8.4336 16.9374 8.14756 16.9349C7.86153 16.9324 7.58792 16.8177 7.38566 16.6154C7.18339 16.4132 7.06866 16.1396 7.06618 15.8535C7.06369 15.5675 7.17365 15.2919 7.37237 15.0862L10.4575 12L7.37237 8.91382C7.26817 8.81318 7.18507 8.69281 7.12789 8.55971C7.07072 8.42662 7.04063 8.28347 7.03937 8.13862C7.03811 7.99377 7.06571 7.85012 7.12056 7.71605C7.17541 7.58198 7.25642 7.46018 7.35884 7.35775C7.46127 7.25532 7.58308 7.17432 7.71714 7.11947C7.85121 7.06461 7.99486 7.03701 8.13971 7.03827C8.28456 7.03953 8.42771 7.06962 8.56081 7.1268C8.6939 7.18397 8.81428 7.26708 8.91491 7.37127L12 10.4575L15.0851 7.37127C15.1857 7.26708 15.3061 7.18397 15.4392 7.1268C15.5723 7.06962 15.7154 7.03953 15.8603 7.03827C16.0051 7.03701 16.1488 7.06461 16.2829 7.11947C16.4169 7.17432 16.5387 7.25532 16.6412 7.35775C16.7436 7.46018 16.8246 7.58198 16.8794 7.71605C16.9343 7.85012 16.9619 7.99377 16.9606 8.13862C16.9594 8.28347 16.9293 8.42662 16.8721 8.55971C16.8149 8.69281 16.7318 8.81318 16.6276 8.91382L13.5425 12L16.6276 15.0862Z" fill="#7A9DE7"/>
            </svg>

            </button>
            <img
              src={selectedBooster.icon}
              alt={selectedBooster.name}
              className="w-[115px] h-[115px] mx-auto"
            />
            <p className="text-xl font-bold text-center mt-4">{selectedBooster.name}</p>
            <p className="text-sm font-semibold text-white text-center mt-2">{selectedBooster.description}</p>
            <p className="text-xl flex font-bold text-yellow-400 text-left mt-4">
            <img
              src={coinIcon}
              className="w-[22px] h-[22px] ml-[130px] mr-2 mt-[3px]"
            />
              {selectedBooster.price.toLocaleString()}<span className='text-white'>/Lv {selectedBooster.level} </span>
            </p>
            <button className="bg-gradient-to-r from-[#3A88FF] to-[#0866F5] mt-6 ml-[95px] w-[200px] py-3 rounded-2xl text-white font-bold">
              Level Up
            </button>
          </div>
        </div>
      )}

      {/* Навигация */}
      <NavBar />
    </div>
  );
};

export default BoostsPage;
