import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/background_4.jpg';
import leprechaun from '../assets/leprechaun_1.png';
import avatar from '../assets/Rectangle 13.svg';
import frens from '../assets/frens.svg';
import boosts from '../assets/rocket.svg';
import energy from '../assets/energy.svg';
import profit from '../assets/Group 14.svg';
import toncoin from '../assets/toncoin 1.svg';
import dailyLogin from '../assets/daily login 1.svg';
import cards from '../assets/cards 1.svg';
import coin from '../assets/coin.svg';
import NavBar from '../components/NavBar';

const HomePage = () => {
    const navigate = useNavigate();
  const [userData, setUserData] = useState({
    profitPerHour: 0,
    balance: 0,
    energy: "1000/1000",
    boosters: [
      { id: 'multitap', name: 'Multitap', price: 100, level: 1 },
      { id: 'battery', name: 'Battery Pack', price: 100, level: 1 },
      { id: 'recharge', name: 'Recharge Speed', price: 100, level: 1 },
      { id: 'autobot', name: 'Auto Bot', price: 20000, level: 1 },
    ],
  });
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  useEffect(() => {
    // Имитация запроса к бэкенду
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://api.example.com/user/home'); // Замените на ваш API
        const data = await response.json();
        setUserData({
          ...data,
          boosters: [
            { id: 'multitap', name: 'Multitap', price: 100, level: data.boosterLevels.multitap },
            { id: 'battery', name: 'Battery Pack', price: 100, level: data.boosterLevels.battery },
            { id: 'recharge', name: 'Recharge Speed', price: 100, level: data.boosterLevels.recharge },
            { id: 'autobot', name: 'Auto Bot', price: 20000, level: data.boosterLevels.autobot },
          ],
        });
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleConnectWallet = () => {
    // Логика подключения кошелька
    alert('Connecting wallet...');
    setIsWalletConnected(true);
  };

  return (
    <div
      className="relative min-h-[956px] bg-cover text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Верхняя секция */}
      <div className="flex justify-between items-center px-4 py-4">
        <div className="flex items-center mt-4 ml-2 space-x-2"
            onClick={() => navigate('/ava')}
        >
          <img src={avatar} alt="Avatar" className="w-16 h-16 border rounded-lg border-[#567db5]" />
          <div>
            <p className="text-sm">Profit per hour</p>
            <div className="flex items-center space-x-1">
              <img src={profit} alt="Profit" className="w-4 h-4" />
              <span className="text-lg font-bold">{userData.profitPerHour}</span>
            </div>
          </div>
        </div>
        <button className="absolute left-48 top-12">
          <img src={toncoin} alt="Toncoin" className="w-10 h-10" />
        </button>
        <div
          className="flex mt-5 bg-blue-950/60 px-6 py-[1px] backdrop-blur-md rounded-full shadow-lg border border-[#567db5]"
          onClick={handleConnectWallet}
        >
          <p className="text-lg">
            {isWalletConnected ? 'Wallet Connected' : 'Connect Wallet'}
          </p>
        </div>
      </div>

      {/* Средняя секция */}
      <div className="flex justify-center space-x-8 py-6">
        <div className="text-center bg-[#0c254d] opacity-80 px-5 py-1 backdrop-blur-md rounded-2xl shadow-lg border-2 border-[#567db5]"           
        onClick={() => navigate('/daily')}
        >
          <img src={dailyLogin} alt="Daily Login" className="w-[70px] h-[70px] mx-auto" />
          <p className="-mt-2 text-lg font-semibold">Daily Login</p>
        </div>
        <div className="text-center bg-[#0c254d] opacity-80 px-8 py-1 backdrop-blur-md rounded-2xl shadow-lg border-2 border-[#567db5]"
        onClick={() => navigate('/cards')}
        >
          <img src={cards} alt="Cards" className="w-[70px] h-[70px] mx-auto" />
          <p className="-mt-2 text-lg font-semibold">Cards</p>
        </div>
      </div>

      {/* Баланс пользователя */}
      <div className="flex flex-col items-center">
        <div className="relative flex">
          <img src={coin} alt="Coin" className="w-[46px] h-[46px] mr-2" />
          <p className="text-4xl font-bold">{userData.balance.toLocaleString()}</p>
        </div>
      </div>

      {/* Секция монет */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <img src={coin} alt="Coin" className="w-80 h-80 mt-5" />
        </div>
      </div>

      {/* Нижняя секция */}
<div className="grid space-y-2 w-[152px] h-[30px] ml-4 mt-24">
        <div
          className="flex items-center space-x-2 bg-blue-950/70 px-4 backdrop-blur-md rounded-full shadow-lg border border-[#567db5] cursor-pointer"
          onClick={() => navigate('/frens')}
        >
          <img src={frens} alt="Frens" className="w-8 h-8 mt-1" />
          <p>Frens</p>
        </div>
        <div
          className="flex items-center space-x-2 bg-blue-950/70 px-4 backdrop-blur-md rounded-full shadow-lg border border-[#567db5] cursor-pointer"
          onClick={() => navigate('/boosts')}
        >
          <img src={boosts} alt="Boosts" className="w-8 h-8 mt-1" />
          <p>Boosts</p>
        </div>
        <div className="flex items-center space-x-2 bg-blue-950/70 px-4 backdrop-blur-md rounded-full shadow-lg border border-[#567db5]">
          <img src={energy} alt="Energy" className="w-8 h-8 mt-1" />
          <p>{userData.energy}</p>
        </div>
      </div>

      {/* Лепрекон */}
      <img
        src={leprechaun}
        alt="Leprechaun"
        className="absolute bottom-24 right-6 w-[175.92px] h-[315.4px]"
      />
      <NavBar />
    </div>
  );
};

export default HomePage;
