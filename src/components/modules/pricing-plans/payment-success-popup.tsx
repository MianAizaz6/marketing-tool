import React from 'react';
import { successIcon } from '../../../static-img-url';


const PaymentSuccess: React.FC = () => {
  return (
    <div className="w-full text-center">
      {/* Success Icon */}
      <div className="w-full flex justify-center">
        <img src={successIcon} alt="" />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900 mb-1">
        Payment Successful!
      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 text-sm mb-1">You’re all set!</p>

      {/* Description */}
      <p className="text-gray-500 text-sm mb-6">
        Your payment has been processed, and your subscription is now active.
        A confirmation email has been sent to your inbox.
      </p>

      {/* Close Button */}
      <button
        className="w-full py-2 border border-gray-300 rounded-lg text-gray-800 font-medium hover:bg-gray-50 transition"
      >
        Close
      </button>
    </div>
  );
};

export default PaymentSuccess;
