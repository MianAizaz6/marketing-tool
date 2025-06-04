import { ReactNode } from 'react';

const DashboardCard = ({
  children,
  border = false,
  className,
}: {
  children: ReactNode;
  border?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`bg-[#F8F8F8] rounded-[12px] p-[16px] ${className} ${border ? 'border-[4px] border-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]' : ''}`}
    >
      {children}
    </div>
  );
};

export default DashboardCard;
