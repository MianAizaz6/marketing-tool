import React, { useState } from "react";
import WebsiteInfo from "../../../components/modules/onboarding/website-info";
// import { activeStepImg, nonActiveStep } from "../../../static-img-url";
import StepDot from "../../../components/modules/onboarding/step-dot";
import GoalsAndMetrics from "../../../components/modules/onboarding/goals-and-metrics";
import CompititorData from "../../../components/modules/onboarding/compititor-data";
import ReviewInfo from "../../../components/modules/onboarding/review-info";

const Onboarding: React.FC = () => {

  const [activeStep, setActiveStep] = useState(1);
  const [filledSteps, setFilledSteps] = useState<number[]>([1]);

  const [formData, setFormData] = useState({ websiteUrl: '', description: '', logo: [], goals: [], metrics: [], compititorData: [{ url: '' }] })


  const onChangeHandler = (name: string, value: string) => {
    console.log('===name', name);
    console.log('===value', value);
    const newFd = { ...formData };
    newFd[name] = value;
    setFormData(newFd);
  }

  const ChangeStep = (step: number) => {
    // const newStep = filledSteps.length < 1 ? setFilledSteps([...filledSteps, 1, step]) : step;
    setFilledSteps([...filledSteps, step]);
    setActiveStep(step);
  }

  console.log(formData)

  const steps = [
    undefined,
    <WebsiteInfo ChangeStep={ChangeStep} formData={formData} onChangeHandler={onChangeHandler} />,
    <GoalsAndMetrics ChangeStep={ChangeStep} formData={formData} onChangeHandler={onChangeHandler} />,
    <CompititorData ChangeStep={ChangeStep} formData={formData} onChangeHandler={onChangeHandler} />,
    <ReviewInfo ChangeStep={ChangeStep} formData={formData} />,
  ]
  const stepsLabels = [
    { id: 0, label: "URL & Description" },
    { id: 1, label: "Goals & Metrics" },
    { id: 2, label: "Competitor Data" },
    { id: 3, label: "Review Info" },
  ];

  console.log('steps filled', filledSteps);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="flex items-center justify-center relative w-full max-w-[60%]  mx-auto mb-6">
        {stepsLabels.map((step, index) => (
          <div key={index} className="flex items-center">
            <StepDot label={step.label} isActive={index + 1 === activeStep} isDone={filledSteps.includes(index + 1)} />
            {index < steps.length - 2 && (
              <div className="flex-1 w-40 h-0.5 bg-gray-200"></div>
            )}
          </div>
        ))}
      </div>
      {steps[activeStep]}
    </div>
  );
};

export default Onboarding;
