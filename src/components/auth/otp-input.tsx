import React from 'react';
import OtpInput from 'react-otp-input';

type OtpInputFieldProps = {
  value: string;
  onChange: (otp: string) => void;
  numInputs?: number;
};

const OtpInputField: React.FC<OtpInputFieldProps> = ({ value, onChange, numInputs = 6 }) => {
  return (
    <div className="flex justify-center">
      <OtpInput
        value={value}
        onChange={onChange}
        numInputs={numInputs}
        inputType="tel" // restricts to numbers
        containerStyle="flex gap-2"
        renderInput={props => (
          <input
            {...props}
            className="min-w-[44px] min-h-[44px] border border-[#CBD5E1] rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-[#FF4400]"
          />
        )}
      />
    </div>
  );
};

export default OtpInputField;
