import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import Tasks from './pages/Tasks';
import Shop from './pages/Shop';
import Quiz from './pages/Quiz';
import Airdrop from './pages/Airdrop.jsx';
import HomePage from './pages/HomePage';
import FrensPage from './pages/FrensPage';
import BoostsPage from './pages/BoostsPage';
import DailyLogin from './pages/DailyLogin.jsx';
import Cards from './pages/Cards.jsx';
import Avatar from './pages/Avatar.jsx';

const App = () => {
  const [isOnboardingComplete, setOnboardingComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const onboardingStatus = localStorage.getItem('onboardingComplete');
    if (onboardingStatus === 'true') {
      setOnboardingComplete(true);
    }
    setIsLoading(false);
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem('onboardingComplete', 'true');
    setOnboardingComplete(true);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0a0e15] text-white">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isOnboardingComplete) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <Router>
      <div className="min-h-[956px] bg-[#0a0e15]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/airdrop" element={<Airdrop />} />
          <Route path="/frens" element={<FrensPage />} />
          <Route path="/boosts" element={<BoostsPage />} />
          <Route path="/daily" element={<DailyLogin />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/ava" element={<Avatar />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
