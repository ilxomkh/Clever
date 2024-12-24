import React, { useState, useEffect } from 'react';
import avatar1 from '../assets/Rectangle 8.svg';
import avatar2 from '../assets/Rectangle 9.svg';
import avatar3 from '../assets/Rectangle 10.svg';
import avatar4 from '../assets/Rectangle 11.svg';
import avatar5 from '../assets/Rectangle 12.svg';
import avatar6 from '../assets/Rectangle 13.svg';
import profitIcon from '../assets/coin.svg';
import clock from '../assets/timer 1.svg';
import backgroundImage from '../assets/background_5.jpg';
import NavBar from '../components/NavBar';

const Avatar = () => {
  const [userData, setUserData] = useState({
    currentAvatar: avatar1,
    profitPerHour: 0,
  });
  const [avatars, setAvatars] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockAvatars = [
      { id: 1, src: avatar1, isActive: true },
      { id: 2, src: avatar2, isActive: false },
      { id: 3, src: avatar3, isActive: false },
      { id: 4, src: avatar4, isActive: false },
      { id: 5, src: avatar5, isActive: false },
      { id: 6, src: avatar6, isActive: false },
    ];

    setTimeout(() => {
      setUserData({ currentAvatar: avatar1, profitPerHour: 0 });
      setAvatars(mockAvatars);
      setSelectedAvatar(mockAvatars[0]);
      setLoading(false);
    }, 500);
  }, []);

  const handleAvatarChange = (avatar) => {
    setSelectedAvatar(avatar);
    setUserData((prev) => ({ ...prev, currentAvatar: avatar.src }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-black text-white">
        <p className="text-lg font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <div
      className="relative h-[956px] bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Текущий аватар */}
      <div className="flex items-center ml-4">
        <img
          src={userData.currentAvatar}
          alt="Current Avatar"
          className="w-[66px] h-[66px] mt-6 border-[2px] rounded-[9.24px] border-[#567DB5]"
        />
        <div className="ml-4">
          <p className="text-sm font-semibold mt-6">Profit per hour</p>
          <div className="flex items-center space-x-2 mt-2">
          <img src={clock} alt="timer" className="w-5 h-5" />
            <img src={profitIcon} alt="Profit" className="w-3 h-3 absolute top-[74px]" />
            <span className="text-lg font-bold">+ {userData.profitPerHour}</span>
          </div>
        </div>
      </div>

      {/* Выбранный аватар */}
      <div className="flex flex-col items-center mt-6">
        <img
          src={selectedAvatar?.src || userData.currentAvatar}
          alt="Selected Avatar"
          className="w-[150px] h-[150px] border-4 rounded-[21px] border-[#567DB5]"
        />
        <button
          className="mt-8 bg-gradient-to-r from-[#3A88FF] to-[#0866F5] px-16 py-2 rounded-2xl text-lg font-bold"
          onClick={() => handleAvatarChange(selectedAvatar)}
        >
          Use
        </button>
      </div>

      {/* Список аватаров */}
      <div className="grid grid-cols-3 gap-4 mt-8 px-6">
        {avatars.map((avatar) => (
          <div
            key={avatar.id}
            className={`flex items-center justify-center p-2 rounded-lg cursor-pointer ${
              avatar.src === selectedAvatar?.src ? 'ring-2 ring-[#567DB5]' : ''
            }`}
            onClick={() => setSelectedAvatar(avatar)}
          >
            <img
              src={avatar.src}
              alt={`Avatar ${avatar.id}`}
              className="w-[100px] h-[100px] rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Навигация */}
      <div className="absolute bottom-0 left-0 w-full">
        <NavBar />
      </div>
    </div>
  );
};

export default Avatar;
