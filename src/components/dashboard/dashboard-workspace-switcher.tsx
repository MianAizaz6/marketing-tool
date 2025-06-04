import { arrowDown } from '../../static-img-url';
import PricingButton from '../ui-components/dashboard/pricing-button';

const DashboardWorkspaceSwitcher = () => {
  return (
    <div className="px-[24px] flex gap-[12px] h-[52px] justify-between items-center border-b border-[#E2E8F0]">
      <div className="flex gap-[8px] items-center">
        <div className="w-[28px] h-[28px] rounded-[6px] flex items-center justify-center bg-gradient-to-b from-[#00C940] to-[#0099FF] text-[8px] text-white">
          PW
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="text-[#333333] text-[14px] font-medium line-clamp-1">Product Workspace</h3>
          <p className="text-[#666666] text-[12px] ">Free plan</p>
        </div>
        <img className="w-[12px] h-[12px] cursor-pointer" src={arrowDown} alt="Arrow-down" />
      </div>
      <PricingButton />
    </div>
  );
};

export default DashboardWorkspaceSwitcher;
