import React, { useState } from 'react';
import background1 from '../assets/background_1.jpg';
import background2 from '../assets/background_2.jpg';
import background3 from '../assets/background_3.jpg';
import coin from '../assets/coin.svg';
import leprechaun1 from '../assets/leprechaun_2.svg';
import leprechaun2 from '../assets/leprechaun_3.svg';

const Onboarding = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      onComplete(); // Завершаем онбординг
    }
  };

  const steps = [
    {
      background: background1,
      content: (
        <>
            Tap the Clover and <span className='text-yellow-300'>Earn Coins!</span> <br/>
          Start tapping, collecting coins, and boosting <span className="text-yellow-300">your rewards</span>.
          <br /> <br/>
          Share the fun with friends and earn even more through our <span className="text-blue-400">referral system</span>.
        </>
      ),
      image: coin,
      character: leprechaun1,
    },
    {
      background: background3,
      content: (
        <>
            Unique <span className="text-yellow-300">Airdrop Quiz System</span> <br/>
          Take part in exciting quizzes and earn rewards by simply <span className="text-yellow-300">answering questions</span>.
          <br />
          Our system ensures everyone can benefit and <span className="text-blue-400">grow together</span>.
        </>
      ),
      image: coin,
      character: leprechaun1,
    },
    {
      background: background2,
      content: (
        <>
            Stay Connected with <span className="text-yellow-300">Clover</span> <br />
          Follow the latest updates and be part of the <span className="text-blue-400">Clover family</span>.
          <br />
          Together, we’re a strong community contributing to <span className="text-yellow-300">the future of DeFi</span>.
        </>
      ),
      image: coin,
      character: leprechaun2,
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-between min-h-[956px] bg-cover bg-center text-white px-6"
      style={{
        backgroundImage: `url(${steps[step].background})`,
      }}
    >
      <div className="flex flex-col items-center mt-16 relative text-center">
        <button
          className="absolute top-[250px] w-[327px] h-[327px] flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
          onClick={handleNext}
        >
          <img src={steps[step].image} alt="Coin" className="w-full h-full" />
        </button>
        <div className={`px-6 py-2 max-w-96 bg-blue-950/50 backdrop-blur-sm rounded-3xl shadow-lg border-2 border-[#567db5] transition-all duration-300${
      step === 1 ? 'absolute  translate-y-[660px] z-50' : '-mt-8'
    }`}
  >
  <p className="text-lg font-bold leading-relaxed text-center">
    {steps[step].content}
  </p>
</div>

      </div>
      <img
        src={steps[step].character}
        alt="Character"
        className={`absolute top-[548px] right-[520px] w-[250.43px] h-[395.19px] rotate-[3.07deg] ${
          step === 1
            ? 'transform scale-x-[-1] left-[520px] rotate-[356.94deg]'
            : step === 2
            ? 'top-[499px] right-[550px] w-[346.54px] h-[421.44px]'
            : 'right-[480px]'
        }`}
      />
    </div>
  );
};

export default Onboarding;
