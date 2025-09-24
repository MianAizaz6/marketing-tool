import { Outlet } from 'react-router-dom';

const AdsManager = () => {
  return (
    <div className="p-[32px_24px] flex flex-col gap-[16px]">
      <Outlet />
    </div>
  );
};

export default AdsManager;
