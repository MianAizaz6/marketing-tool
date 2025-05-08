import React from "react";
import { activeStep } from "../../../static-img-url";

const CreateWorkSpace: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        {/* Stepper */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex-1 flex items-center justify-center">
            <div> <img src={activeStep} alt="" /></div>
            <div className="flex-1 h-0.5 bg-[#CBD5E1]"></div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-orange-200"></div>
            <div className="flex-1 h-0.5 bg-[#CBD5E1] px-4"></div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-orange-200"></div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-lg font-semibold mb-2">ENTER DETAILS</h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Set up your workspace to personalize and organize your <br />
          social media management.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Workspace Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Website URL<span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              placeholder="Enter url"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Upload logo</label>
            <div className="w-full border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center py-6 text-center text-sm text-gray-500 cursor-pointer hover:border-orange-400 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-400 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V4m0 0L3 8m4-4l4 4M21 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2"
                />
              </svg>
              <span>
                <span className="font-medium text-orange-500">Click to upload</span> or drag and drop
              </span>
              <p className="text-xs text-gray-400 mt-1">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white rounded-md py-2 font-medium hover:bg-gray-900 transition"
          >
            Create workspace
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateWorkSpace;
