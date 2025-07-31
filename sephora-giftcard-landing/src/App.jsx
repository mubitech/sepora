import React from 'react';
import GradientBackground from './components/GradientBackground';
import HookSection from './components/HookSection';
import CallToActionButton from './components/CallToActionButton';
import StepsSection from './components/StepsSection';
import NoticeSection from './components/NoticeSection';

const App = () => {
  return (
    <div>
      <GradientBackground />
      <HookSection />
      <CallToActionButton />
      <StepsSection />
      <NoticeSection />
    </div>
  );
};

export default App;