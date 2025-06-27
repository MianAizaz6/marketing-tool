import React from 'react'
import { Loader } from '../../ui-components/loader';


const OnBoardingLoading: React.FC = () => {
  return (
    <div className="bg-[#F8F8F8] flex flex-col gap-3 border-[2px] border-white shadow-lg rounded-xl p-6 w-[340px] text-center">

      <div className='flex justify-center w-full'>
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="48" height="48" rx="24" fill="#666666" fill-opacity="0.05" />
          <rect x="4" y="4" width="48" height="48" rx="24" stroke="#333333" stroke-opacity="0.04" stroke-width="8" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M33 28C33 30.7614 30.7614 33 28 33C25.2386 33 23 30.7614 23 28C23 25.2386 25.2386 23 28 23C30.7614 23 33 25.2386 33 28ZM31.5 28C31.5 29.933 29.933 31.5 28 31.5C26.067 31.5 24.5 29.933 24.5 28C24.5 26.067 26.067 24.5 28 24.5C29.933 24.5 31.5 26.067 31.5 28Z" fill="#333333" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.134 19.8398C21.1774 20.3921 20.8496 21.6153 21.4019 22.5719C22.025 23.6511 21.2462 25.0001 20 25.0001C18.8954 25.0001 18 25.8955 18 27.0001V29.0001C18 30.1047 18.8954 31.0001 20 31.0001C21.2462 31.0001 22.025 32.3491 21.4019 33.4283C20.8496 34.3849 21.1774 35.608 22.134 36.1603L23.866 37.1603C24.8226 37.7126 26.0458 37.3849 26.5981 36.4283C27.2212 35.3491 28.7788 35.3491 29.4019 36.4283C29.9542 37.3849 31.1774 37.7126 32.134 37.1603L33.866 36.1603C34.8226 35.608 35.1504 34.3849 34.5981 33.4283C33.975 32.3491 34.7539 31.0001 36 31.0001C37.1046 31.0001 38 30.1047 38 29.0001V27.0001C38 25.8955 37.1046 25.0001 36 25.0001C34.7538 25.0001 33.975 23.6511 34.5981 22.5719C35.1504 21.6153 34.8226 20.3921 33.866 19.8398L32.134 18.8398C31.1774 18.2875 29.9542 18.6153 29.4019 19.5719C28.7789 20.6511 27.2212 20.6511 26.5981 19.5719C26.0458 18.6153 24.8226 18.2875 23.866 18.8398L22.134 19.8398ZM22.701 21.8219C22.5629 21.5827 22.6448 21.2769 22.884 21.1389L24.616 20.1389C24.8552 20.0008 25.161 20.0827 25.299 20.3219C26.4995 22.4011 29.5005 22.4011 30.701 20.3219C30.839 20.0827 31.1448 20.0008 31.384 20.1389L33.116 21.1389C33.3552 21.2769 33.4371 21.5827 33.299 21.8219C32.0986 23.9011 33.5991 26.5001 36 26.5001C36.2761 26.5001 36.5 26.7239 36.5 27.0001V29.0001C36.5 29.2762 36.2761 29.5001 36 29.5001C33.5992 29.5001 32.0986 32.0991 33.299 34.1783C33.4371 34.4174 33.3552 34.7232 33.116 34.8613L31.384 35.8613C31.1448 35.9994 30.839 35.9174 30.701 35.6783C29.5005 33.5991 26.4995 33.5991 25.299 35.6783C25.161 35.9174 24.8552 35.9994 24.616 35.8613L22.884 34.8613C22.6448 34.7232 22.5629 34.4174 22.701 34.1783C23.9014 32.0991 22.4008 29.5001 20 29.5001C19.7239 29.5001 19.5 29.2762 19.5 29.0001V27.0001C19.5 26.7239 19.7239 26.5001 20 26.5001C22.4009 26.5001 23.9014 23.9011 22.701 21.8219Z" fill="#333333" />
        </svg>
      </div>


      {/* Heading */}
      <h2 className="text-[18px] font-bold mb-2">Finalizing Your Setup...</h2>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        We’re putting the final touches on your platform. Your personalized dashboard & analytics are almost ready to help you grow your brand faster and smarter.
      </p>

      {/* Button */}
      <button
        type="button"
        disabled
        className="bg-gray-900 text-white flex items-center justify-center gap-3 cursor-pointer text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition"
      >
        Getting Reading <Loader isLight />
      </button>
    </div>
  )
}

export default OnBoardingLoading
