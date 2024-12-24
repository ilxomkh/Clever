import React, { useState, useEffect } from 'react';
import avatarIcon from '../assets/Rectangle 13.svg';
import coinIcon from '../assets/coin.svg';
import questionIcon from '../assets/Rectangle 26.svg';
import card1 from '../assets/card_1.svg';
import card2 from '../assets/card_2.png';
import card3 from '../assets/card_3.svg';
import card4 from '../assets/card_4.svg';
import card5 from '../assets/card_5.svg';
import card6 from '../assets/card_6.svg';
import card7 from '../assets/card_7.png';
import card8 from '../assets/card_8.svg';
import backgroundImage from '../assets/background_5.jpg'; // Background image
import NavBar from '../components/NavBar';

const Cards = () => {
  const [coins, setCoins] = useState(1000); // Моковые данные для монет
  const [profitPerHour, setProfitPerHour] = useState(200); // Моковые данные для дохода в час
  const [cards, setCards] = useState([
    { id: 1, icon: card1, name: 'Card 1', profit: 100, level: 0, cost: 800 },
    { id: 2, icon: card8, name: 'Card 2', profit: 150, level: 0, cost: 900 },
    { id: 3, icon: card3, name: 'Card 3', profit: 200, level: 0, cost: 1000 },
    { id: 4, icon: card4, name: 'Card 4', profit: 250, level: 0, cost: 1100 },
    { id: 5, icon: card5, name: 'Card 5', profit: 300, level: 0, cost: 1200 },
    { id: 6, icon: card6, name: 'Card 6', profit: 350, level: 0, cost: 1300 },
    { id: 7, icon: card7, name: 'Card 7', profit: 400, level: 0, cost: 1400 },
    { id: 8, icon: card2, name: 'Card 8', profit: 450, level: 0, cost: 1500 },
  ]); // Моковые данные для карт
  const [comboTime, setComboTime] = useState('11:59:59');

  // Обработка покупки карты
  const handleBuyCard = (cardId) => {
    const updatedCards = cards.map((card) => {
      if (card.id === cardId && coins >= card.cost) {
        setCoins((prevCoins) => prevCoins - card.cost); // Снимаем стоимость карты с монет
        setProfitPerHour((prevProfit) => prevProfit + card.profit); // Увеличиваем доход в час
        return { ...card, level: card.level + 1 }; // Повышаем уровень карты
      }
      return card;
    });
    setCards(updatedCards);
  };

    // useEffect(() => {
  //   fetch('https://api.example.com/cards') // Замените на реальный URL API
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCoins(data.coins); // Установите количество монет из данных API
  //       setProfitPerHour(data.profitPerHour); // Установите доход в час из данных API
  //       setCards(data.cards); // Установите список карт из данных API
  //     })
  //     .catch((error) => {
  //       console.error('Ошибка при загрузке данных с бэкенда:', error);
  //     });
  // }, []);

  return (
    <div
  className="relative min-h-screen bg-cover bg-center text-white"
  style={{
    backgroundImage: `url(${backgroundImage})`,
  }}
>
  {/* Верхний блок */}
  <div className="py-8 flex items-center justify-between px-6">
    <div className="flex flex-col items-center">
      <img src={avatarIcon} alt="Avatar" className="w-[100px] h-[100px]" />
    </div>
    <p className="text-4xl font-bold">{coins.toLocaleString()}</p>
    <img src={coinIcon} alt="Coin" className="w-[100px] h-[100px]" />
  </div>
  <div className="flex items-center space-x-2 bg-blue-950/60 px-4 w-[227px] h-[42px] ml-[107px] mb-10 backdrop-blur-md rounded-full shadow-lg border border-[#567db5]">
    <p className="text-md font-semibold text-gray-300">Profit per hour</p>
    <img src={coinIcon} alt="Coin" className="w-6 h-6" />
    <p className="text-lg font-bold">{profitPerHour}</p>
  </div>

  {/* Комбо-карты */}
  <div className="bg-[#0c254d] bg-opacity-75 rounded-3xl p-4 mx-4 mb-6 border border-[#567db5]">
    <div className="flex justify-between items-center">
      <p className="text-lg font-semibold">
        Combo <span className="text-yellow-400">Cards</span>
      </p>
      <div className="flex items-center space-x-2">
        <p className="text-sm font-medium text-gray-300">{comboTime}</p>
        <div className="bg-[#000000]/25 rounded-full px-1 flex">
          <img src={coinIcon} alt="Coin" className="w-4 h-4 mt-0.5 mr-1" />
          <p className="text-sm font-medium text-yellow-400">
            +0/<span className="text-[#BFD4FF]">1M</span>
          </p>
        </div>
      </div>
    </div>
    <div className="flex justify-around">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex flex-col items-center">
          <img src={questionIcon} alt="Card" className="w-full h-full" />
          <p className="text-md font-medium text-white">Hind</p>
        </div>
      ))}
    </div>
  </div>

  {/* Секция с картами */}
  <div className="flex-grow h-[calc(100vh-335px)] overflow-y-auto px-4 pb-[80px]">
    <div className="grid grid-cols-2 gap-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-[#0c254d] rounded-3xl py-2 px-2 flex flex-col items-center border border-[#567db5] shadow-lg"
        >
          <p className="text-lg font-semibold">{card.name}</p>
          <img src={card.icon} alt={card.name} className="w-[130px] h-[130px] rounded-lg mt-2" />
          <p className="text-sm font-medium text-white mt-2 flex items-center">
            Profit per hour:
            <span className="flex items-center ml-1">
              <img src={coinIcon} alt="Coin" className="w-4 h-4 mr-1" />
              +{card.profit}
            </span>
          </p>
          <div className="flex items-center space-x-3 w-full mt-4 ml-4">
            <p className="text-sm font-medium text-gray-400">lvl {card.level}</p>
            <p className="text-sm font-medium">
              <span className="flex items-center ml-1">
                <img src={coinIcon} alt="Coin" className="w-4 h-4 mr-1" />
                {card.cost}
              </span>
            </p>
            <button
              className={`px-4 py-px rounded-lg text-sm font-bold text-white ${
                coins >= card.cost
                  ? 'bg-gradient-to-r from-blue-600 to-blue-400'
                  : 'bg-gray-600 cursor-not-allowed'
              }`}
              onClick={() => handleBuyCard(card.id)}
              disabled={coins < card.cost}
            >
              Buy
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Навигация */}
    <NavBar />
  </div>

  );
};

export default Cards;