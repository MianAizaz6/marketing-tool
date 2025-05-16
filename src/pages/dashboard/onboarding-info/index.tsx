import React, { useState } from 'react';
import FristStep from '../../../components/modules/onboarding-info/first-step';
import SecondStep from '../../../components/modules/onboarding-info/second-step';
import ThirdStep from '../../../components/modules/onboarding-info/third-step';


// interface OnboardingScreensProps {
//   screens: string[],
//   activeStep: number,
//   ChangeStep: (step: number) => void
// }

const OnBoardingInfo: React.FC = () => {

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

export default OnBoardingInfo;
