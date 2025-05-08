import React, { useState } from 'react';
import FristStep from '../../../components/modules/onboarding/first-step';
import SecondStep from '../../../components/modules/onboarding/second-step';
import ThirdStep from '../../../components/modules/onboarding/third-step';


interface OnboardingScreensProps {
  screens: React.FC[],
  activeStep: number,
  ChangeStep: () => void
}

const OnBoarding: React.FC<OnboardingScreensProps> = () => {

  const [activeStep, setActiveStep] = useState(1);

  const ChangeStep = (step: number) => {
    setActiveStep(step)
  }

  const screens = [
    undefined,
    <FristStep ChangeStep={ChangeStep} />,
    <SecondStep ChangeStep={ChangeStep} />,
    <ThirdStep ChangeStep={ChangeStep} />,
  ]


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100">
      {screens[activeStep]}
    </div>
  );
};

export default OnBoarding;
