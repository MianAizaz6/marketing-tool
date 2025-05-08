import React from 'react'
import { step1 } from '../../../static-img-url'

type MyComponentProps = {
  ChangeStep: (step: number) => void;
};

const FristStep: React.FC<MyComponentProps> = ({ ChangeStep }) => {
  return (
    <div className="bg-[#F8F8F8] flex flex-col gap-3 border-[2px] border-white shadow-lg rounded-xl p-6 w-[340px] text-center">
      {/* Image */}
      <div className="mb-4 bg-white rounded-md px-4">
        <img
          src={step1}
          alt="Welcome Illustration"
          className="mx-auto rounded-md animate-float"
        />
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center space-x-1 mb-4">
        <span className="w-2 h-2 rounded-full bg-gray-800"></span>
        <span className="w-2 h-2 rounded-full bg-gray-400"></span>
        <span className="w-2 h-2 rounded-full bg-gray-400"></span>
      </div>

      {/* Heading */}
      <h2 className="text-lg font-bold mb-2">WELCOME!</h2>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        Get ready to simplify your social media management.
        Let’s set up your workspace so you can start planning,
        posting, and growing your brand with ease.
      </p>

      {/* Button */}
      <button
        type="button"
        onClick={() => ChangeStep(2)}
        className="bg-gray-900 text-white cursor-pointer text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition"
      >
        Let’s go
      </button>
    </div>
  )
}

export default FristStep
