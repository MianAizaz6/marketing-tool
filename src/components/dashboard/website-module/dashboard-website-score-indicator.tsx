const DashboardWebsiteScoreIndicator = () => {
  return (
    <div className="flex gap-[13px] items-center">
      <div className="flex gap-[8px] items-center">
        <div className="bg-[#FF3B30] w-[24px] h-[6px] rounded-[3px]" />
        <p className="text-[#666666] text-[12px] font-medium leading-[14px]">0-49</p>
      </div>
      <div className="flex gap-[8px] items-center">
        <div className="bg-[#FFCC00] w-[24px] h-[6px] rounded-[3px]" />
        <p className="text-[#666666] text-[12px] font-medium leading-[14px]">05-89</p>
      </div>
      <div className="flex gap-[8px] items-center">
        <div className="bg-[#34C759] w-[24px] h-[6px] rounded-[3px]" />
        <p className="text-[#666666] text-[12px] font-medium leading-[14px]">90-100</p>
      </div>
    </div>
  );
};

export default DashboardWebsiteScoreIndicator;
