import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import tasksIcon from '../assets/Group 1.svg';
import shopIcon from '../assets/Group 4.svg';
import quizIcon from '../assets/Group 17.svg';
import airdropIcon from '../assets/Group 7.svg';
import { FaHome } from 'react-icons/fa';

const NavBar = () => {
  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome />, isReactIcon: true },
    { name: 'Tasks', path: '/tasks', icon: tasksIcon },
    { name: 'Shop', path: '/shop', icon: shopIcon },
    { name: 'Quiz', path: '/quiz', icon: quizIcon },
    { name: 'Airdrop', path: '/airdrop', icon: airdropIcon },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-[#0a0e15]/50 backdrop-blur-sm px-8 py-1 flex justify-between items-center rounded-t-[35px] shadow-lg border-t border-[#294771] z-40">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? 'bg-[#112859] border-t border-white rounded-full' : ''
            }`
          }
        >
          <div
            className={`flex flex-col items-center justify-center w-16 h-16 ${
              item.isReactIcon ? 'rounded-full' : ''
            }`}
          >
            {item.isReactIcon ? (
              <item.icon.type className="w-6 h-6 text-[#7a9de7]" />
            ) : (
              <img src={item.icon} alt={item.name} className="w-6 h-6" />
            )}
            <p className="mt-2 text-xs text-white">{item.name}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default NavBar;
