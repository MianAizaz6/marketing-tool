import React from 'react';
import { Loader } from '../../ui-components/loader';
import { paymentProcessIcon } from '../../../static-img-url';


const PaymentProcessing: React.FC = () => {
  return (
    <div className="text-center">
      {/* Icon */}
      <div className='flex justify-center w-full'>
        <img src={paymentProcessIcon} />
      </div>

      {/* Heading */}
      <h2 className="text-md font-semibold text-gray-800 mb-1">
        Processing Your Payment...
      </h2>

      {/* Subtext */}
      <p className="text-sm text-gray-600">
        Hang tight — we’re securely completing your transaction.<br />
        This may take a few seconds. Please don’t refresh or close the window.
      </p>

      {/* Loading Button */}
      <div className="mt-4">
        <button
          type="button"
          disabled
          className="w-full flex items-center justify-center gap-2 bg-gray-400 text-white text-sm font-medium py-2.5 px-4 rounded-md cursor-not-allowed"
        >
          <Loader isLight={true} />
          Loading
        </button>
      </div>
    </div>
  );
};

export default PaymentProcessing;
