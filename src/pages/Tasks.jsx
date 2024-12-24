import React, { useState, useEffect } from 'react';
import diamondIcon from '../assets/diamonds 1.svg';
import coinIcon from '../assets/coin.svg';
import telegramIcon from '../assets/Group 20.svg';
import NavBar from '../components/NavBar';
import backgroundImage from '../assets/background_4.jpg'; // Фоновое изображение
import { FaArrowRight } from 'react-icons/fa';

const Tasks = () => {
  const [tasks, setTasks] = useState([]); // Хранение данных задач
  const [diamonds, setDiamonds] = useState(0); // Хранение количества бриллиантов

  // Используем моковые данные
  useEffect(() => {
    const mockData = {
      totalDiamonds: 10,
      tasks: [
        {
          id: 1,
          name: 'Join channel',
          reward: { diamonds: 2, coins: 20000 },
          progress: '0/5',
          timeLeft: '12:56:14',
        },
        {
          id: 2,
          name: 'Join channel',
          reward: { diamonds: 2, coins: 20000 },
          progress: '1/5',
          timeLeft: '11:45:10',
        },
        {
          id: 3,
          name: 'Join channel',
          reward: { diamonds: 2, coins: 20000 },
          progress: '3/5',
          timeLeft: '10:30:00',
        },
        {
            id: 4,
            name: 'Join channel',
            reward: { diamonds: 2, coins: 20000 },
            progress: '0/5',
            timeLeft: '12:56:14',
          },
          {
            id: 5,
            name: 'Join channel',
            reward: { diamonds: 2, coins: 20000 },
            progress: '1/5',
            timeLeft: '11:45:10',
          },
          {
            id: 6,
            name: 'Join channel',
            reward: { diamonds: 2, coins: 20000 },
            progress: '3/5',
            timeLeft: '10:30:00',
          },
      ],
    };

    setTasks(mockData.tasks); // Устанавливаем задачи
    setDiamonds(mockData.totalDiamonds); // Устанавливаем общее количество бриллиантов
  }, []);

  return (
    <div className="relative min-h-[956px] bg-cover bg-center text-white">
      {/* Фон */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      {/* Шторка */}
      <div className="absolute inset-0 backdrop-blur-md bg-gradient-to-b from-blue-900/60 to-blue-950/80"></div>

      {/* Контент */}
      <div className="relative z-10">
        {/* Верхняя часть с количеством бриллиантов */}
        <div className="text-center pt-6">
          <div className="flex justify-center items-center space-x-2 mt-[79px]">
            <img src={diamondIcon} alt="Diamonds" className="w-[46.98px] h-[37.53px] mt-1" />
            <p className="text-4xl font-bold">{diamonds}</p>
          </div>
          <p className="mt-2 text-lg font-bold text-white">More tasks, More rewards</p>
        </div>

        {/* Список задач */}
        <div className="mt-14 space-y-6 px-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between bg-blue-950/50 rounded-2xl px-4 py-3 border border-[#567db5] shadow-md"
            >
              <div className="flex items-center space-x-4">
                {/* Иконка задачи */}
                  <img src={telegramIcon} alt="Telegram" className="w-[50px] h-[50px]" />

                {/* Информация о задаче */}
                <div>
                  <p className="text-lg font-medium">{task.name}</p>
                  <div className="flex items-center space-x-4 text-sm mt-1">
                  <p className="flex items-center">
                    <span className="text-yellow-400 mr-1">
                        <img src={coinIcon} alt="Coin" className="w-[15px] h-[15px] mb-0.5 inline" />
                    </span>
                    {task.reward.coins}
                    </p>

                    <p className="flex items-center">
                      <img src={diamondIcon} alt="Diamonds" className="w-[18.78px] h-[15px] mr-1" />
                      {task.reward.diamonds}
                    </p>
                  </div>
                </div>
              </div>

              {/* Прогресс задачи */}
              <div className="flex space-x-2">
                <p className="text-sm text-white">{task.progress}</p>
                <p className="text-sm text-white">{task.timeLeft}</p>
              </div>
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.72849 7.84658L2.15369 0.271927C1.97849 0.0965929 1.74462 0 1.49525 0C1.24588 0 1.01201 0.0965929 0.836816 0.271927L0.278985 0.82962C-0.0839998 1.19302 -0.0839998 1.78365 0.278985 2.14649L6.63973 8.50724L0.271927 14.875C0.0967313 15.0504 0 15.2841 0 15.5333C0 15.7828 0.0967313 16.0166 0.271927 16.192L0.829758 16.7496C1.00509 16.9249 1.23883 17.0215 1.4882 17.0215C1.73757 17.0215 1.97144 16.9249 2.14663 16.7496L9.72849 9.16803C9.9041 8.99214 10.0006 8.7573 10 8.50765C10.0006 8.25704 9.9041 8.02233 9.72849 7.84658Z" fill="#BFD4FF"/>
                </svg>

            </div>
          ))}
        </div>
      </div>

      {/* Навбар */}
      <NavBar />
    </div>
  );
};

export default Tasks;
