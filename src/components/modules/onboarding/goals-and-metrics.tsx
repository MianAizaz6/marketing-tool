import React, { useState } from "react";
import CardWrapper from "./card-wrapper";

interface Option {
  id: number;
  label: string;
  subLabel?: string;
}

const goalsData: Option[] = [
  { id: 1, label: "Drive more traffic" },
  { id: 2, label: "Increase sales/conversions" },
  { id: 3, label: "Improve customer retention" },
  { id: 4, label: "Enhance brand visibility" },
  { id: 5, label: "Optimize user experience" },
  { id: 6, label: "Improve SEO ranking" },
];

const metricsData: Option[] = [
  { id: 1, label: "Page Speed", subLabel: "e.g., load time < 3 seconds" },
  { id: 2, label: "Conversion rate", subLabel: "e.g increase by 5%" },
  { id: 3, label: "Average Order Value", subLabel: "for e-commerce" },
  { id: 4, label: "Bounce Rate", subLabel: "e.g less than 40%" },
  { id: 5, label: "Customer Acquisition Cost", subLabel: "for service based businesses" },
];

type MyComponentProps = {
  ChangeStep: (step: number) => void;
  formData: object,
  onChangeHandler: (name: string, value: string) => void,
};

const GoalsAndMetrics: React.FC<MyComponentProps> = ({ ChangeStep, }) => {
  const [selectedGoals, setSelectedGoals] = useState<number[]>([]);
  const [selectedMetrics, setSelectedMetrics] = useState<number[]>([]);

  const toggleSelection = (id: number, list: number[], setList: React.Dispatch<React.SetStateAction<number[]>>) => {
    setList((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <CardWrapper title="Business Goals and Target Metrics" desc=" Select the options below which you want to make better and grow your business">

      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3">Choose your goals</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {goalsData.map((goal) => (
            <button
              key={goal.id}
              type="button"
              className={`w-full text-left px-4 py-3 border bg-white rounded-lg text-sm transition-all
                ${selectedGoals.includes(goal.id)
                  ? "border-gray-900 bg-gray-100 font-medium"
                  : "border-gray-200 hover:border-gray-400"
                }`}
              onClick={() =>
                toggleSelection(goal.id, selectedGoals, setSelectedGoals)
              }
            >
              {goal.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium mb-3">Choose target metrics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {metricsData.map((metric) => (
            <button
              key={metric.id}
              type="button"
              className={`w-full text-left px-4 py-3 border bg-white rounded-lg text-sm transition-all
                ${selectedMetrics.includes(metric.id)
                  ? "border-gray-900 bg-gray-200 font-medium"
                  : "border-gray-200 hover:border-gray-400"
                }`}
              onClick={() =>
                toggleSelection(metric.id, selectedMetrics, setSelectedMetrics)
              }
            >
              <div>{metric.label}</div>
              {metric.subLabel && (
                <div className="text-xs text-gray-500 mt-1">{metric.subLabel}</div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className='flex justify-between  w-full mt-5'>
        <button
          type="button"
          onClick={() => ChangeStep(1)}
          className="w-fit px-8 bg-white cursor-pointer border-1 border-[#CBD5E1] text-black rounded-md py-2 font-medium hover:bg-gray-900 hover:text-white transition"
        >
          Back
        </button>

        <button
          type="button"
          onClick={() => ChangeStep(3)}
          className="w-fit px-8 bg-black cursor-pointer text-white rounded-md py-2 font-medium hover:bg-gray-900 transition"
        >
          Next
        </button>
      </div>
    </CardWrapper>
  );
};

export default GoalsAndMetrics;

