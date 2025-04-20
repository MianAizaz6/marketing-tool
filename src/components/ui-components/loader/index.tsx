import React from 'react';

interface LoaderProps {
  className?: string;
  isLight?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ className, isLight = false }) => {
  const defaultClass = isLight ? 'border-[#F5F5F5]' : 'border-[#2D9D78]';

  return (
    <span
      className={`animate-spin inline-block w-[16px] h-[16px] border-[2px] rounded-full border-r-transparent ${className ?? defaultClass}`}
    />
  );
};
