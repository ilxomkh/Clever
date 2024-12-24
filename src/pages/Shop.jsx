import React, { useState, useEffect } from 'react';
import shop1 from '../assets/shop_1.png';
import shop2 from '../assets/shop_2.png';
import shop3 from '../assets/shop_3.svg';
import shop4 from '../assets/shop_4.svg';
import shop5 from '../assets/shop_5.png';
import shop6 from '../assets/shop_6.png';
import shop7 from '../assets/shop_7.svg';
import shop8 from '../assets/shop_8.png';
import coinIcon from '../assets/coin.svg';
import diamondIcon from '../assets/diamonds 1.svg';
import backgroundImage from '../assets/background_4.jpg'; // Background image
import NavBar from '../components/NavBar';

const Shop = () => {
  const [isHelpVisible, setHelpVisible] = useState(false);
  const [diamonds, setDiamonds] = useState(0); // Total diamonds for the user
  const [shopItems, setShopItems] = useState([]); // Shop items

  // Mock data for testing
  useEffect(() => {
    const mockData = {
      diamonds: 8, // Current user diamonds
      shopItems: [
        { id: 1, icon: shop1, name: 'Profit per hour', price: { diamonds: 10, coins: 100 } },
        { id: 2, icon: shop2, name: 'Profit per hour', price: { diamonds: 5, coins: 100 } },
        { id: 3, icon: shop3, name: 'Profit per hour', price: { diamonds: 15, coins: 100 } },
        { id: 4, icon: shop4, name: 'Profit per hour', price: { diamonds: 20, coins: 100 } },
        { id: 5, icon: shop5, name: 'Profit per hour', price: { diamonds: 10, coins: 100 } },
        { id: 6, icon: shop6, name: 'Profit per hour', price: { diamonds: 12, coins: 100 } },
        { id: 7, icon: shop7, name: 'Profit per hour', price: { diamonds: 8, coins: 100 } },
        { id: 8, icon: shop8, name: 'Profit per hour', price: { diamonds: 6, coins: 100 } },
      ],
    };

    setDiamonds(mockData.diamonds);
    setShopItems(mockData.shopItems);
  }, []);

  return (
    <div className="relative min-h-screen bg-cover bg-center text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
      <div className="absolute inset-0 backdrop-blur-md bg-gradient-to-b from-blue-900/60 to-blue-950/80"></div>

      {/* Top Section */}
      <div className="relative z-10">
        <div className="px-6 py-10">
          <div className="w-full bg-[#7a9de7] rounded-3xl h-[150px] flex items-center justify-center text-center text-white text-lg font-semibold">
            Advertising banner
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4 -mt-8 px-4 py-4">
          {/* Diamonds Info */}
          <div className="flex items-center space-x-2">
            <img src={diamondIcon} alt="Diamonds" className="w-6 h-6" />
            <p className="text-xl font-bold">Your diamonds: {diamonds}</p>
          </div>
          {/* Help Button */}
          <button className="text-xl absolute left-[375px]" onClick={() => setHelpVisible(true)}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 0C4.92575 0 0 4.93851 0 11C0 17.0742 4.92575 22 11 22C17.0615 22 22 17.0742 22 11C22 4.93851 17.0615 0 11 0ZM10.9872 18.0824C10.2854 18.0824 9.71114 17.5081 9.71114 16.8063C9.71114 16.1044 10.2726 15.5302 10.9745 15.5302H10.9872C11.6891 15.5302 12.2633 16.1044 12.2633 16.8063C12.2633 17.5081 11.6891 18.0824 10.9872 18.0824ZM12.2761 12.1868V12.9652C12.2761 13.6671 11.7019 14.2413 11 14.2413C10.2981 14.2413 9.72389 13.6671 9.72389 12.9652V11.1531C9.72389 10.4513 10.2981 9.87703 11 9.87703C11.5998 9.87703 12.0974 9.39211 12.0974 8.77958C12.0974 8.17981 11.5998 7.69489 11 7.69489C10.4002 7.69489 9.90255 8.17981 9.90255 8.77958C9.90255 9.4942 9.3283 10.0557 8.62645 10.0557C7.92459 10.0557 7.35035 9.4942 7.35035 8.77958C7.35035 6.7761 8.98376 5.14269 11 5.14269C13.0035 5.14269 14.6496 6.7761 14.6496 8.77958C14.6496 10.3492 13.6543 11.6636 12.2761 12.1868Z"
                fill="#7A9DE7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative z-10 h-[calc(100vh-114px)] overflow-y-auto px-4 pb-[80px]">
        <div className="grid grid-cols-2 gap-4 py-4 px-2">
          {shopItems.map((item) => {
            const isDisabled = diamonds < item.price.diamonds;

            return (
              <div
                key={item.id}
                className="bg-[#0c254d] w-[180px] h-[240px] rounded-3xl p-3 flex flex-col items-center border border-[#567db5] shadow-lg relative"
              >
                {/* Image */}
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-[130px] h-[130px] mt-3 rounded-xl"
                />

                {/* Name and coins on one row */}
                <div className="flex items-center justify-between w-full px-1 mt-6">
                  <p className="text-xs text-white">{item.name}</p>
                  <div className="flex items-center">
                    <img src={coinIcon} alt="Coin" className="w-4 h-4 mr-1 ml-[2px]" />
                    <p className="text-sm font-bold text-yellow-400">
                      +{item.price.coins}
                    </p>
                  </div>
                </div>

                {/* Diamonds and button */}
                <div className="flex items-center justify-between w-full px-2 mt-1">
                  <div className="flex items-center space-x-1">
                    <img src={diamondIcon} alt="Diamond" className="w-4 h-4" />
                    <p>
                      {diamonds}/{item.price.diamonds}
                    </p>
                  </div>
                  <button
                    className={`text-sm px-4 py-1 rounded-md ${
                      isDisabled
                        ? 'bg-gradient-to-r from-[#525252] to-[#343434] text-white cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#3A88FF] to-[#0866F5] text-white hover:bg-[#0037CC]'
                    }`}
                    disabled={isDisabled}
                  >
                    Buy
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

     {/* Help Modal */}
        {isHelpVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-start justify-center z-50">
            <div className="relative bg-[#0c254d] bg-opacity-75 rounded-2xl p-6 shadow-lg border border-[#567db5] mt-[390px] w-[390px] h-[175px]">
            {/* Кнопка закрытия */}
            <button
                className="absolute top-4 right-4 text-white text-lg"
                onClick={() => setHelpVisible(false)}
            >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389959 7.20038 -0.17433 9.00998 0.172936 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9972 6.61391 17.0481 4.32636 15.3609 2.63915C13.6736 0.95193 11.3861 0.00281493 9 0ZM12.4707 11.3146C12.5489 11.3901 12.6112 11.4804 12.6541 11.5802C12.697 11.68 12.7195 11.7874 12.7205 11.896C12.7214 12.0047 12.7007 12.1124 12.6596 12.213C12.6184 12.3135 12.5577 12.4049 12.4809 12.4817C12.404 12.5585 12.3127 12.6193 12.2121 12.6604C12.1116 12.7015 12.0039 12.7222 11.8952 12.7213C11.7866 12.7203 11.6792 12.6978 11.5794 12.6549C11.4796 12.612 11.3893 12.5497 11.3138 12.4715L9 10.1569L6.68618 12.4715C6.53187 12.6206 6.3252 12.703 6.11067 12.7012C5.89615 12.6993 5.69094 12.6133 5.53924 12.4616C5.38754 12.3099 5.3015 12.1047 5.29963 11.8901C5.29777 11.6756 5.38024 11.4689 5.52928 11.3146L7.84309 9L5.52928 6.68536C5.45113 6.60989 5.3888 6.5196 5.34592 6.41978C5.30304 6.31996 5.28047 6.2126 5.27953 6.10396C5.27858 5.99533 5.29928 5.88759 5.34042 5.78704C5.38156 5.68648 5.44231 5.59513 5.51913 5.51831C5.59596 5.44149 5.68731 5.38074 5.78786 5.3396C5.88841 5.29846 5.99615 5.27776 6.10478 5.2787C6.21342 5.27965 6.32078 5.30222 6.42061 5.3451C6.52043 5.38798 6.61071 5.45031 6.68618 5.52845L9 7.84309L11.3138 5.52845C11.3893 5.45031 11.4796 5.38798 11.5794 5.3451C11.6792 5.30222 11.7866 5.27965 11.8952 5.2787C12.0039 5.27776 12.1116 5.29846 12.2121 5.3396C12.3127 5.38074 12.404 5.44149 12.4809 5.51831C12.5577 5.59513 12.6184 5.68648 12.6596 5.78704C12.7007 5.88759 12.7214 5.99533 12.7205 6.10396C12.7195 6.2126 12.697 6.31996 12.6541 6.41978C12.6112 6.5196 12.5489 6.60989 12.4707 6.68536L10.1569 9L12.4707 11.3146Z" fill="#7A9DE7"/>
        </svg>

            </button>

            {/* Иконка и количество бриллиантов */}
            <div className="flex items-center justify-center space-x-2 mb-4">
                <img src={diamondIcon} alt="Diamonds" className="w-10 h-10 mt-1" />
                <p className="text-4xl font-bold">{diamonds}</p>
            </div>

            {/* Описание */}
            <p className="text-center text-[15px] font-medium leading-relaxed text-gray-300">
                Diamantes are the in-game currency in{' '}
                <span className="text-yellow-400">Clover</span> Earn them in the Tasks section
                and buy various items.
            </p>
            </div>
        </div>
        )}


      <NavBar />
    </div>
  );
};

export default Shop;
