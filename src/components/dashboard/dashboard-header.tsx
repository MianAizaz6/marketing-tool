import { notificationImg } from '../../static-img-url';

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center border-b px-[24px] border-[#CBD5E1] h-[48px] ">
      <h3 className="text-[18px] font-semibold leading-[136%] text-[#333333]">Dashboard</h3>
      <div className="flex gap-[16px] items-center">
        <div className="relative bg-[#F8F8F8] flex items-center justify-center rounded-[30px] w-[32px] h-[32px]">
          <img className="w-[20px] h-[20px]" src={notificationImg} alt="notificationIcon" />
        </div>
        <div className="relative bg-[#E2E8F0] flex items-center justify-center rounded-[30px] w-[32px] h-[32px]">
          <span className="text-[16px] text-[#0F172A]">A</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
