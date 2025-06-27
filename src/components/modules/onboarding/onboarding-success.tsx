import React from 'react'
import { Link } from 'react-router-dom';


const OnBoardingSuccess: React.FC = () => {
  return (
    <div className="bg-[#F8F8F8] flex flex-col gap-3 border-[2px] border-white shadow-lg rounded-xl p-6 w-[340px] text-center">

      <div className='flex justify-center w-full'>
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="48" height="48" rx="24" fill="#D1FADF" />
          <rect x="4" y="4" width="48" height="48" rx="24" stroke="#ECFDF3" stroke-width="8" />
          <path d="M38 27.08V28C37.9988 30.1564 37.3005 32.2547 36.0093 33.9818C34.7182 35.709 32.9033 36.9725 30.8354 37.5839C28.7674 38.1953 26.5573 38.1219 24.5345 37.3746C22.5117 36.6273 20.7847 35.2461 19.611 33.4371C18.4373 31.628 17.8798 29.4881 18.0217 27.3363C18.1636 25.1846 18.9972 23.1363 20.3983 21.4971C21.7994 19.8578 23.6928 18.7154 25.7962 18.2401C27.8996 17.7649 30.1003 17.9823 32.07 18.86M38 20L28 30.01L25 27.01" stroke="#039855" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

      </div>


      {/* Heading */}
      <h2 className="text-[18px] font-bold mb-2">You're All Set <br />
        and Ready to Grow!</h2>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        Your workspace is fully set up. Start connecting your audience, creating impactful content, and tracking your success — all from one powerful dashboard.
      </p>

      {/* Button */}
      <Link
        to={'/dashboard'}
        className="bg-gray-900 text-white flex items-center justify-center gap-3 cursor-pointer text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition"
      >
        Explore Dashboard
      </Link>
    </div>
  )
}

export default OnBoardingSuccess;
