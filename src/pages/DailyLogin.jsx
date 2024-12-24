import React, { useState, useEffect } from 'react';
import background from '../assets/background_5.jpg';
import calendarIcon from '../assets/daily login 1.svg';
import coinIcon from '../assets/coin.svg';
import NavBar from '../components/NavBar';

const DailyLogin = () => {
  const [days, setDays] = useState([]);
  const [currentDay, setCurrentDay] = useState(1); // Assume Day 1 for testing
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiBaseUrl = 'https://api.example.com'; // Replace with your backend URL

  useEffect(() => {
    // Simulated backend call for daily rewards
    setTimeout(() => {
      setDays([
        { day: 1, reward: 1, bigDay: false, claimed: false },
        { day: 2, reward: 3, bigDay: false, claimed: false },
        { day: 3, reward: 5, bigDay: false, claimed: false },
        { day: 4, reward: 10, bigDay: true, claimed: false },
        { day: 5, reward: 9, bigDay: false, claimed: false },
        { day: 6, reward: 11, bigDay: false, claimed: false },
        { day: 7, reward: 15, bigDay: false, claimed: false },
        { day: 8, reward: 50, bigDay: true, claimed: false },
        { day: 9, reward: 20, bigDay: false, claimed: false },
        { day: 10, reward: 25, bigDay: false, claimed: false },
        { day: 11, reward: 30, bigDay: false, claimed: false },
        { day: 12, reward: 100, bigDay: true, claimed: false },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  const handleClaim = (day) => {
    // Placeholder for API call to claim reward
    const updatedDays = days.map((d) =>
      d.day === day ? { ...d, claimed: true } : d
    );
    setDays(updatedDays);
    alert(`Claimed reward for Day ${day}`);
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
      {/* Header */}
      <div className="text-center py-8">
      <p className="text-4xl font-bold mt-4">Daily Login</p>
        <img src={calendarIcon} alt="Daily Login" className="w-[88.98px] h-[97px] mx-auto mt-4" />
        <p className="text-md font-semibold text-white mt-2 px-32">
          The more you log every day, the more Clover
        </p>
      </div>

{/* Days Grid */}
<div className="grid grid-cols-4 gap-4 px-4 mt-8 gap-y-16">
        {days.map((day) => (
          <div
            key={day.day}
            className={`relative flex w-[90px] h-[90px] flex-col items-center  rounded-[11.96px] shadow-md ${
              day.bigDay
                ? 'bg-[#0c254d] bg-opacity-75 border border-[#567db5]'
                : 'bg-[#0c254d] bg-opacity-75 border border-[#567db5]'
            }`}
          >
            {/* Day Label */}
            <div
            className={`bg-[#0F223E] w-[88px] rounded-t-[11.96px] text-center items-center h-[23px] -mt-[0.5px] ${
                day.day === currentDay ? 'bg-[#3956cb]' : ''
            }`}
            >
            <p
                className={`text-xs font-bold mt-0.5 ${
                day.bigDay ? 'text-yellow-400' : 'text-white'
                }`}
            >
                {day.bigDay ? 'Big Day' : `Day ${day.day}`}
            </p>
            </div>


            {/* Reward Icon */}
            <img src={coinIcon} alt="Reward" className="w-10 h-10 my-[3px]" />

            {/* Reward Amount */}
            <p className="text-sm font-semibold text-white">
              {day.reward.toLocaleString()}k
            </p>

            {/* Claim Button */}
            {day.day === currentDay && !day.claimed && (
              <button
                className="absolute -bottom-10 w-[81px] bg-blue-600 px-4 py-1 rounded-xl text-white font-bold text-sm shadow-lg hover:bg-blue-500 transition-all"
                onClick={() => handleClaim(day.day)}
              >
                Claim
              </button>
            )}

            {/* Claimed Status */}
            {day.claimed && (
              <p className="absolute -bottom-6 text-xs text-gray-200">Claimed</p>
            )}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <NavBar />
    </div>
  );
};

export default DailyLogin;
