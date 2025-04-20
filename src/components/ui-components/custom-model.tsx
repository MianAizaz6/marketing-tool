import React, { ReactNode } from 'react';
import { closeIcon } from '../../static-img-url';

interface CustomModelProps {
  children: ReactNode;
  toggle: (state?: boolean) => void;
  open: boolean;
  width?: string;
  height?: string;
  heading?: string;
  header?: boolean;
}

const CustomModel: React.FC<CustomModelProps> = ({
  children,
  toggle,
  open,
  width,
  height,
  heading,
  header = false,
}) => {
  if (!open) return null;

  const modalWidth = width || 'md:w-[40%] w-[95%]';
  const modalHeight = height || 'max-h-[700px]';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        onClick={() => toggle(false)}
        className="absolute inset-0 bg-gray-700 opacity-50 z-10"
      ></div>

      {/* Modal Box */}
      <div
        className={`relative bg-white shadow-2xl overflow-y-auto rounded-[8px] p-[20px_20px_30px_20px] z-50 ${modalWidth} ${modalHeight}`}
      >
        {/* Header */}
        {header && (
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-[24px] text-[#31373D] font-medium">{heading}</h1>
            <img
              src={closeIcon}
              onClick={() => toggle()}
              alt="Close Modal"
              className="w-[12px] h-[12px] cursor-pointer"
            />
          </div>
        )}

        {/* Content */}
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default CustomModel;
