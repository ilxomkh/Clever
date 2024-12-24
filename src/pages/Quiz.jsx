import React, { useState, useEffect } from 'react';
import backgroundStart from '../assets/background_7.jpg';
import backgroundQuiz from '../assets/background_8.jpg';
import questionBackground from '../assets/5675969.png';
import lep from '../assets/smile 1.svg';
import tim from '../assets/timer 1.svg';
import confetti from '../assets/confetti.svg';
import starWin from '../assets/star 1.svg';
import starLose from '../assets/star 1-2.svg';
import coinIcon from '../assets/coin.svg';
import NavBar from '../components/NavBar';

const Quiz = () => {
    const [currentScreen, setCurrentScreen] = useState('start'); // start, question, win, lose
    const [quizData, setQuizData] = useState(null); // Данные квиза
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [timer, setTimer] = useState(15); // Таймер на вопрос
    const [reward, setReward] = useState(0); // Награда
    const [totalReward, setTotalReward] = useState(0); // Общий пул токенов для квиза
    const [correctAnswers, setCorrectAnswers] = useState(0); // Количество правильных ответов
    const [isQuizAvailable, setIsQuizAvailable] = useState(false); // Доступен ли квиз сейчас
    const [showCorrectAnswers, setShowCorrectAnswers] = useState(false); // Для отображения правильных/неправильных ответов
    const [isTimerOver, setIsTimerOver] = useState(false); // Указывает, закончился ли таймер
    const [countdown, setCountdown] = useState(''); // Обратный таймер до начала игры
    const [retryCountdown, setRetryCountdown] = useState('05:00'); // Таймер для повторной попытки
    const [canRetry, setCanRetry] = useState(false); // Можно ли повторить квиз
  
    useEffect(() => {
      // Моковые данные для теста
      const fetchQuizData = async () => {
        const mockQuizData = {
          isAvailable: true,
          totalReward: 10000, // Общий призовой фонд
          startTime: new Date().getTime() + 3600000, // Время начала игры через 1 час
          questions: [
            {
              id: 1,
              question: 'In what year was bitcoin (BTC) invented?',
              options: [
                { id: 'A', text: 'January 3, 2009' },
                { id: 'B', text: 'April 9, 2010' },
                { id: 'C', text: 'July 23, 2008' },
              ],
              correctAnswer: 'A',
              timeLimit: 15, // Таймер для вопроса
            },
          ],
        };
  
        setIsQuizAvailable(mockQuizData.isAvailable);
        setQuizData(mockQuizData);
        setTotalReward(mockQuizData.totalReward);
        startCountdown(mockQuizData.startTime); // Запуск обратного таймера
      };
  
      fetchQuizData();
    }, []);
  
    const formatNumber = (number) => {
      return number.toLocaleString();
    };
  
    // Функция обратного таймера до начала игры
    const startCountdown = (startTime) => {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = startTime - now;
  
        if (distance <= 0) {
          clearInterval(interval);
          setIsQuizAvailable(true); // Игра становится доступной
        } else {
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          setCountdown(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
        }
      }, 1000);
    };
  
    // Таймер для текущего вопроса
    useEffect(() => {
      if (currentScreen === 'question' && timer > 0) {
        const countdown = setInterval(() => {
          setTimer((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(countdown);
      } else if (timer === 0 && currentScreen === 'question') {
        setIsTimerOver(true); // Указывает, что таймер завершен
        setShowCorrectAnswers(true); // Показать правильные/неправильные ответы
      }
    }, [timer, currentScreen]);
  
    // Таймер для повторной попытки после проигрыша
    useEffect(() => {
      if (currentScreen === 'lose') {
        setCanRetry(false);
        let timeLeft = 300; // 5 минут в секундах
  
        const retryTimer = setInterval(() => {
          timeLeft -= 1;
          const minutes = Math.floor(timeLeft / 60);
          const seconds = timeLeft % 60;
  
          setRetryCountdown(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
  
          if (timeLeft <= 0) {
            clearInterval(retryTimer);
            setCanRetry(true); // Дать возможность повторить
          }
        }, 1000);
  
        return () => clearInterval(retryTimer);
      }
    }, [currentScreen]);
  
    const handleNextQuestion = () => {
      const isCorrect = selectedOption === quizData.questions[currentQuestion].correctAnswer;
      if (isCorrect) {
        setCorrectAnswers((prev) => prev + 1);
      }
  
      if (currentQuestion + 1 < quizData.questions.length) {
        setCurrentQuestion((prev) => prev + 1);
        setTimer(quizData.questions[currentQuestion + 1].timeLimit);
        setSelectedOption(null);
        setIsTimerOver(false);
        setShowCorrectAnswers(false);
      } else {
        setReward(Math.floor(totalReward / (correctAnswers + (isCorrect ? 1 : 0))));
        setCurrentScreen(correctAnswers + (isCorrect ? 1 : 0) > 0 ? 'win' : 'lose');
      }
    };
  
    const handleRetry = () => {
      if (canRetry) {
        setCurrentScreen('start');
        setCorrectAnswers(0);
        setTimer(15);
        setSelectedOption(null);
        setIsTimerOver(false);
        setShowCorrectAnswers(false);
      }
    };


  if (!quizData) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (!isQuizAvailable) {
    return (
      <div className="relative min-h-[956px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
          style={{
            backgroundImage: `url(${backgroundStart})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
          <div className="flex flex-col items-center justify-center bg-blue-900/50 rounded-xl p-8 border border-[#567db5] shadow-md w-[90%] max-w-[360px] text-center">
            <p className="text-2xl font-bold mb-4">The quiz will start soon</p>
            <p className="text-lg mb-6">In the meantime, you can increase your profit per hour</p>
            <img src={lep} alt="Smile" className="w-16 h-16" />
          </div>

          <div className="flex items-center justify-center space-x-2 bg-blue-800/70 border border-[#567db5] p-4 mt-24 rounded-lg">
            <img src={tim} alt="Hourglass" className="w-8 h-8 animate-spin-pause" />
            <p className="text-3xl font-bold text-yellow-400">{countdown}</p>
          </div>
        </div>
        <NavBar />
      </div>
    );
  }

  

  return (
    <div className="relative min-h-[956px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
        style={{
          backgroundImage: `url(${
            currentScreen === 'start' ? backgroundStart : backgroundQuiz
          })`,
        }}
      ></div>

      <div className="relative z-10 text-white">
      {currentScreen === 'start' && (
    <div className="flex flex-col items-center justify-center h-[956px]">
      <div className="mt-4 text-3xl font-bold bg-blue-900/80 border border-[#567db5] p-4 py-6 rounded-xl">
        <div className="flex items-center justify-center space-x-1">
          <img src={coinIcon} alt="Coin" className="w-6 h-6" />
          <span className='text-yellow-400'>{formatNumber(totalReward)}</span> 
          <p>tokens available</p>
        </div>
        <p className="text-xl text-center font-bold mt-6">Hurry up, the quiz has already started</p>
        <img
          src={lep}
          alt="Smile"
          className="w-14 h-14 mt-4 mx-auto"
        />
      </div>
      <button
        onClick={() => setCurrentScreen('question')}
        className="mt-36 bg-gradient-to-r from-green-400 to-green-600 px-8 py-3 rounded-2xl text-lg font-bold"
      >
        Start Quiz
      </button>
    </div>
  )}

        {currentScreen === 'question' && (
          <div className="relative min-h-screen flex flex-col items-center justify-center px-6">
            <div
              className="absolute top-[157px] left-[50px] w-[340px] h-[175px] inset-0 bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: `url(${questionBackground})`, zIndex: -1 }}
            ></div>

            <div className="relative w-full max-w-[390px] h-[825px] mt-[132px] bg-black/40 rounded-t-3xl p-6 shadow-lg">
              <div className="w-full text-center">
                <p className="text-lg font-bold text-white mt-12 mb-24">
                  {quizData.questions[currentQuestion].question}
                </p>
              </div>

              <div className="relative flex items-center w-full mb-8">
                <p className="text-sm text-white font-bold mr-2">Time</p>
                <div className="flex-grow h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#0ace00] via-[#c0ce00] to-[#ce0700]"
                    style={{
                      width: `${(timer / quizData.questions[currentQuestion].timeLimit) * 100}%`,
                    }}
                  ></div>
                </div>
                <p className="text-sm text-white font-bold ml-2">
                  {`00:${String(timer).padStart(2, '0')}`}
                </p>
              </div>

              <div className="w-full space-y-6">
                {quizData.questions[currentQuestion].options.map((option) => {
                  const isCorrect = option.id === quizData.questions[currentQuestion].correctAnswer;
                  const isSelected = selectedOption === option.id;

                  let buttonClass = "w-full py-4 px-4 rounded-2xl text-lg font-bold text-white transition";

                  if (showCorrectAnswers) {
                    buttonClass += isCorrect
                      ? " bg-[#7ef17f]"
                      : " bg-[#e2887b]";
                  } else {
                    buttonClass += isSelected
                      ? " bg-gradient-to-b from-[#FFE031] to-[#B99D00]"
                      : " bg-gradient-to-b from-[#31FF76] to-[#A3B900]";
                  }

                  return (
                    <button
                      key={option.id}
                      onClick={() => !isTimerOver && setSelectedOption(option.id)}
                      className={buttonClass}
                      disabled={isTimerOver}
                    >
                      {option.id}. {option.text}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={handleNextQuestion}
                className="mt-24 ml-14 bg-gradient-to-r from-[#3A88FF] to-[#0866F5] px-24 py-2 rounded-xl text-white text-lg font-bold"
                disabled={!selectedOption && !isTimerOver}
              >
                Next
              </button>
            </div>
          </div>
        )}

            {currentScreen === 'win' && (
            <div className="relative flex flex-col items-center justify-center min-h-[956px]">
                {/* Фон с конфетти */}
                <img src={confetti} alt="Confetti" className="absolute top-0 left-0 w-full h-full object-cover" />

                {/* Основной блок */}
                <div className="relative z-10 bg-blue-900/40 p-8 rounded-3xl border border-[#567db5] shadow-md w-[90%] max-w-[360px] text-center">
                {/* Звезды */}
                <div className="flex justify-center space-x-2 mb-4">
                <img
                    src={starWin}
                    alt="Star"
                    className="w-[60.92px] h-[65.06] rotate-[345deg] animate-fadeIn delay-[0ms] animate-heartbeat mb-2"
                />
                <img
                    src={starWin}
                    alt="Star"
                    className="w-[74.13px] h-[79.16] mb-8 animate-fadeIn delay-[200ms] animate-heartbeat"
                />
                <img
                    src={starWin}
                    alt="Star"
                    className="w-[60.92px] h-[65.06px] rotate-[15deg] mt-4 animate-fadeIn delay-[400ms] animate-heartbeat"
                />
                </div>

                {/* Текст поздравления */}
                <p className="text-2xl font-bold text-yellow-400 mb-2">Congratulations!</p>
                <p className="text-lg text-white mb-4">
                    You answered {correctAnswers}/{quizData.questions.length} questions correctly
                </p>
                {/* Награда */}
                <p className="text-lg text-white mb-2">Coins earned:</p>
                <div className="flex flex-col items-center justify-center space-y-2">
                    <img src={coinIcon} alt="Coins" className="w-[89px] h-[89px]" />
                    <p className="text-4xl font-bold text-yellow-400">{formatNumber(reward)}</p>
                    </div>

                </div>

                {/* Кнопка Claim */}
                <button
                className="relative z-10 mt-24 bg-gradient-to-r from-[#3A88FF] to-[#0866F5] px-12 py-3 rounded-2xl text-white text-xl font-bold"
                onClick={() => alert('Claim your reward!')}
                >
                Claim
                </button>
            </div>
            )}


{currentScreen === 'lose' && (
  <div className="relative flex flex-col items-center justify-center min-h-[956px]">
    {/* Основной блок */}
    <div className="relative z-10 bg-gradient-to-b from-green-600 to-blue-900 p-8 rounded-3xl border border-[#567db5] shadow-md w-[90%] max-w-[360px] text-center">
      {/* Звёзды */}
      <div className="flex justify-center space-x-2 mb-4">
        <img
          src={starLose}
          alt="Star"
          className="w-[60.92px] h-[65.06] rotate-[345deg] animate-fadeIn delay-[0ms] animate-heartbeat mb-2"
          />
        <img
          src={starLose}
          alt="Star"
          className="w-[74.13px] h-[79.16] mb-8 animate-fadeIn delay-[200ms] animate-heartbeat"
          />
        <img
          src={starLose}
          alt="Star"
          className="w-[60.92px] h-[65.06px] rotate-[15deg] mt-4 animate-fadeIn delay-[400ms] animate-heartbeat"
          />
      </div>

      {/* Текст поражения */}
      <p className="text-2xl font-bold text-white mb-2">Try again</p>

      {/* Таймер */}
      <div className="flex flex-col items-center justify-center mb-4">
        <img src={tim} alt="Timer Icon" className="w-12 h-12 mb-2 animate-spin-pause" />
        <p className="text-4xl font-bold text-yellow-400">{retryCountdown}</p>
      </div>

      {/* Информация о награде */}
      <p className="text-lg text-white mb-2">Coins earned:</p>
      <div className="flex flex-col items-center justify-center space-y-2">
        <img src={coinIcon} alt="Coins" className="w-[89px] h-[89px]" />
        <p className="text-4xl font-bold text-yellow-400">{formatNumber(0)}</p>
      </div>
    </div>

    {/* Кнопка Claim */}
    <button
              className={`mt-24 px-10 py-3 rounded-2xl text-white ${
                canRetry ? 'bg-green-500' : 'bg-gray-500 cursor-not-allowed'
              }`}
              onClick={handleRetry}
              disabled={!canRetry}
            >
              Retry
            </button>
  </div>
)}


      </div>

      <NavBar />
    </div>
  );
};

export default Quiz;
