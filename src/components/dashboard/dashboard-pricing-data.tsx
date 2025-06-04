import PricingButton from '../ui-components/dashboard/pricing-button';

const DashboardPricingData = () => {
  return (
    <div className="w-full px-[8px]">
      <div className="bg-white rounded-[12px] flex flex-col p-[12px] gap-[12px]">
        <div className="flex justify-between w-full">
          <h3 className="text-[14px] font-medium text-[#333333]">Current Plan</h3>
          <PricingButton />
        </div>
        <hr className="text-[#E2E8F0]" />
        <p className="text-[12px] text-[#666666]">
          Upgrade your plan for premium features to boost your business
        </p>
        <button className="bg-[#FF4400] h-[24px] w-fit rounded-[4px] cursor-pointer px-[12px] text-[10px] text-white leading-[18px] font-medium">
          Upgrade Plan
        </button>
      </div>
    </div>
  );
};

export default DashboardPricingData;
