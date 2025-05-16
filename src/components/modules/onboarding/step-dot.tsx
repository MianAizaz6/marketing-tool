import React from "react";
import { activeStepImg, doneStepIcon, nonActiveStep } from "../../../static-img-url";

interface StepDotProps {
  label: string;
  isActive: boolean;
  isDone: boolean,
}


const StepDot: React.FC<StepDotProps> = ({ label, isActive, isDone }) => {

  return (
    <div className="flex-1 flex flex-col items-center relative">
      {/* Dot */}
      <div>
        <img src={isActive ? activeStepImg : isDone ? doneStepIcon : nonActiveStep} alt="" />
      </div>

      {/* Line */}
      <div className="absolute top-2 left-1/2 w-full h-0.5 bg-gray-200 z-[-1]"></div>

      {/* Label */}
      <div
        className={`mt-2 text-xs ${isActive ? "text-orange-500 font-semibold" : "text-gray-500"
          }`}
      >
        {label}
      </div>
    </div>
  );
};

export default StepDot;
