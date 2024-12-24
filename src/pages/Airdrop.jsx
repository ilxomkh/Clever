import React, { useState, useEffect } from "react";
import background from "../assets/background_5.jpg";
import airdropIcon from "../assets/airdrop 1.svg";
import coinIcon from "../assets/coin.svg";
import lepIcon from "../assets/smile 1.svg";
import ton from "../assets/toncoin 1.svg";
import NavBar from "../components/NavBar";

const Airdrop = () => {
  const [balance, setBalance] = useState(1000); // Баланс пользователя
  const [isWalletConnected, setIsWalletConnected] = useState(false); // Состояние подключения кошелька

  const handleConnectWallet = () => {
    // Логика подключения кошелька
    alert("Connecting wallet...");
    setIsWalletConnected(true);
  };

  return (
    <div className="relative min-h-[956px] bg-black">
      {/* Фон */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      />

      {/* Контент */}
      <div className="relative z-10 flex flex-col items-center min-h-screen">
        {/* Кнопка Connect Wallet */}
        <button className="absolute top-8">
          <img src={ton} alt="Toncoin" className='w-10 h-10 mr-3'/>
        </button>
        <div className="absolute top-6 right-6">
          <button
            onClick={handleConnectWallet}
            className='flex mt-[10px] bg-blue-950/60 px-6 py-[3px] backdrop-blur-md rounded-full shadow-lg border border-[#567db5]'
          >
            <span className="font-semibold text-white">{isWalletConnected ? "Wallet Connected" : "Connect Wallet"}</span>
          </button>
        </div>

        {/* Центральное изображение парашюта */}
        <div className="flex items-center justify-center mt-16">
          <img src={airdropIcon} alt="Airdrop" className=" mt-16 w-[311px] h-[368.61px] drop-shadow-lg z-10" />
        </div>

        {/* Дополнительные парашюты в фоне */}
        <div className="absolute top-24 left-10">
          <img src={airdropIcon} alt="Small Airdrop" className="w-[95.91px] h-[121.08px] opacity-40 rotate-[340deg]" />
        </div>
        <div className="absolute top-[342px] left-[303px]">
          <img src={airdropIcon} alt="Small Airdrop" className="w-[115.91px] h-[141.08px] opacity-50 rotate-[20deg]" />
        </div>
        <div className="absolute top-[357px] left-[58px]">
          <img src={airdropIcon} alt="Small Airdrop" className="w-[60px] h-[70px] opacity-30 rotate-[350deg]" />
        </div>

        {/* Блок информации */}
        <div className="bg-[#0c254d] px-12 py-6 rounded-xl border border-[#567db5] shadow-md  w-[90%] max-w-[360px] text-center">
          <p className="text-white text-2xl font-bold">This tab will be available soon</p>
          <div className="flex items-center justify-center mt-4">
            <p className="text-[#BFD4FF] text-lg mr-2">Your balance:</p>
            <img src={coinIcon} alt="Coin Icon" className="w-6 h-6 mx-2" />
            <p className="text-yellow-400 text-lg font-bold">{balance.toLocaleString()}</p>
          </div>
        </div>

        {/* Текст с лепреконом */}
        <div className="flex flex-col items-center mt-16">
          <p className="text-white text-sm">
            In the meantime, you can increase your profit per hour
          </p>
          <img src={lepIcon} alt="Lep Icon" className="w-16 h-16 mt-4" />
        </div>
      </div>

      {/* Навигация */}
      <NavBar />
    </div>
  );
};

export default Airdrop;
