import React from 'react'
import { step3 } from '../../../static-img-url';

type MyComponentProps = {
  ChangeStep: (step: number) => void;
};

const ThirdStep: React.FC<MyComponentProps> = ({ ChangeStep }) => {
  return (
    <div className="bg-[#F8F8F8] flex flex-col gap-3 shadow-lg rounded-xl p-6 w-[340px] text-center">
      {/* Image */}
      <div className="mb-4 bg-white rounded-md px-4">
        <img
          src={step3}
          alt="Welcome Illustration"
          className="mx-auto rounded-md animate-float"
        />
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center space-x-1 mb-4">
        <span className="w-2 h-2 rounded-full bg-gray-400"></span>
        <span className="w-2 h-2 rounded-full bg-gray-400"></span>
        <span className="w-2 h-2 rounded-full bg-gray-800"></span>
      </div>

      {/* Heading */}
      <h2 className="text-lg capitalize font-bold mb-2">Explore Your Dashboard</h2>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        Discover tools built for growth — from smart scheduling and
        AI-powered captions to deep analyticsand team collaboration features.
      </p>

      <div className='flex gap-4 justify-center'>
        {/* Button */}
        <button
          type="button"
          onClick={() => ChangeStep(2)}
          className="bg-white border-[1px] border-gray-200 cursor-pointer text-sm px-6 py-2 hover:border-gray-300 rounded-md hover:bg-gray-100 transition"
        >
          Back
        </button>

        <button
          type="button"
          onClick={() => ChangeStep(3)}
          className="bg-gray-900 text-white cursor-pointer text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

export default ThirdStep
