// components/ui/Tooltip.tsx
import { ReactNode } from 'react';

const Tooltip = ({
  children,
  message,
  position,
}: {
  children: ReactNode;
  message: string;
  position: 'left' | 'right';
}) => {
  return (
    <div className="relative group cursor-pointer">
      {children}
      <div
        className={`absolute z-10 w-fit min-w-[200px] max-w-[300px] hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 top-[30px] ${`${position}-0`} mb-1 `}
      >
        {message}
      </div>
    </div>
  );
};

export default Tooltip;
