import React from 'react'
import CardWrapper from './card-wrapper';
import { tickIcon } from '../../../static-img-url';

type MyComponentProps = {
  ChangeStep: (step: number) => void;
  formData: object,
  onSubmit: (data: object) => void
};

const ReviewInfo: React.FC<MyComponentProps> = ({ ChangeStep, formData, onSubmit }) => {

  const { websiteUrl, description, goals, metrics } = formData;

  return (
    <CardWrapper title='Review your info' desc="Invite your team to collaborate and streamline your content planning.">
      <div className="space-y-4 bg-white p-6 rounded-md">
        {/* Website Section */}
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-4">
          <div className="flex justify-between items-start mb-3">
            <div className="flex gap-3">
              <img
                src="https://placehold.co/40x40"
                alt="Website Logo"
                className="w-10 h-10 rounded-md object-cover"
              />
              <div>
                <p className="text-sm font-medium text-gray-800">Website URL</p>
                <p className="text-sm text-gray-600">{websiteUrl !== '' ? websiteUrl : 'www.example.com'}</p>
              </div>
            </div>
            <button className="text-gray-500 hover:text-black transition">
              <img src={tickIcon} alt="" />
            </button>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-700 mb-1">Business Description</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {description ? description : "Your one-stop shop for quality products, seamless shopping, and fast delivery.We make online buying easy, secure, and enjoyable — helping you find what you love, when you need it."}
            </p>
          </div>
        </div>

        {/* Goals & Metrics Section */}
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm font-medium text-gray-800">Business Goals and Target Metrics</p>
            <button className="text-gray-500 hover:text-black transition">
              <img src={tickIcon} alt="" />
            </button>
          </div>

          <div className="mb-3">
            <p className="text-sm font-semibold text-gray-700 mb-2">Your Goals</p>
            <div className="flex flex-wrap gap-2">
              {
                goals && goals.length ? goals.map((item: string) => {
                  return (
                    <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-gray-700">
                      {item}
                    </span>
                  )
                }) : <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-gray-700">
                  No goals selected..
                </span>
              }
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">Target metrics</p>
            <div className="flex flex-wrap gap-2">

              {
                metrics && metrics.length ? metrics.map((item: string) => {
                  return (
                    <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-gray-700">
                      {item}
                    </span>
                  )
                }) : <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-gray-700">
                  No metrics selected..
                </span>
              }
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-between  w-full mt-5'>
        <button
          type="button"
          onClick={() => ChangeStep(2)}
          className="w-fit px-8 bg-white cursor-pointer border-1 border-[#CBD5E1] text-black rounded-md py-2 font-medium hover:bg-gray-900 hover:text-white transition"
        >
          Back
        </button>

        <button
          type="button"
          onClick={() => onSubmit(formData)}
          className="w-fit px-8 bg-black cursor-pointer text-white rounded-md py-2 font-medium hover:bg-gray-900 transition"
        >
          Get Started
        </button>
      </div>
    </CardWrapper>
  )
}

export default ReviewInfo;



