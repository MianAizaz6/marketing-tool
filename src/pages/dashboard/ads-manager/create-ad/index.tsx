import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { CurrentStep } from '../../../../components/dashboard/ads-module/create-ads/steps/current-step';
import { stepsHeadings } from '../../../../static-data';

const CreateAdFlow = () => {
  const [steps, setSteps] = useState(1);

  const handleNext = () => {
    if (steps < stepsHeadings.length) {
      setSteps(steps + 1);
    }
  };

  const handleBack = () => {
    if (steps > 1) {
      setSteps(steps - 1);
    }
  };

  console.log(steps);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-[16px]">
        <div className="flex justify-between items-center">
          <h3 className="text-[24px] font-bold text-[#101828]">{stepsHeadings[steps - 1]}</h3>
          <h4 className="text-[#101828] text-[14px]">
            Step {steps} of {stepsHeadings.length}
          </h4>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full ">
          <div
            style={{ width: `${(steps / stepsHeadings.length) * 100}%` }}
            className="bg-[#FF4400] h-2 rounded-full transition-all duration-300"
          ></div>
        </div>
      </div>
      <CurrentStep steps={steps} />
      <div className="flex justify-start gap-3">
        <button
          onClick={handleBack}
          disabled={steps === 1}
          className='flex items-center gap-2 px-6 py-3 cursor-pointer text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"'
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
        <button
          onClick={handleNext}
          className={`cursor-pointer flex $${steps === stepsHeadings.length && 'flex-row-reverse '} items-center gap-2 px-6 py-3 bg-[#FF4400] text-white rounded-lg hover:bg-[#ec4002] transition-colors`}
        >
          <span>{steps === stepsHeadings.length ? 'Publish Ad' : ' Next'}</span>
          {steps === stepsHeadings.length ? (
            <Check className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CreateAdFlow;
