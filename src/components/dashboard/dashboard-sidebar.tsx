import { useState } from 'react';
import { dashboardMenuItems } from '../../static-data';
import { dashboardLogo, settingsIcon, signoutIcon } from '../../static-img-url';
import DashboardMenuItem from './dashboard-menu-item';
import DashboardWorkspaceSwitcher from './dashboard-workspace-switcher';
import DashboardPricingData from './dashboard-pricing-data';
import { useQuery } from '@tanstack/react-query';
import { getWorkSpaceList } from '../../apis/onboarding';

const DashboardSidebar = () => {
  const [activeMenu, setActiveMenu] = useState<string>(dashboardMenuItems[0].heading);

  const storedUserInfo = localStorage.getItem('userInfo');
  const userId = storedUserInfo ? JSON.parse(storedUserInfo).id : null;


  const handleMenuClick = (heading: string) => {
    setActiveMenu(heading);
  };

  const workSpaceListQuery = useQuery({
    queryKey: ["workspace-list"],
    queryFn: async () => {
      const data = await getWorkSpaceList(`?userId=${userId}`);
      return data
    }
  });

  return (
    <div className="w-[270px] h-screen fixed left-0 top-0 bg-[#F8F8F8] flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="h-[48px] border-b border-[#E2E8F0] ">
          <img
            className="h-[48px] w-full object-cover cursor-pointer"
            src={dashboardLogo}
            alt="Logo"
          />
        </div>
        <div className="flex flex-col gap-[4px]">
          <DashboardWorkspaceSwitcher data={workSpaceListQuery?.data?.items} />
          <div className="flex flex-col gap-[1px]">
            {dashboardMenuItems.map(item => (
              <DashboardMenuItem
                menuIcon={item.icon}
                menuIconActive={item.activeIcon}
                menuText={item.heading}
                activeMenu={activeMenu === item.heading}
                handleMenuClick={handleMenuClick}
                to={item.link}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[28px] pb-[24px]">
        <DashboardPricingData />
        <div className="border-t border-[#CBD5E1] pt-[8px]">
          <div className="px-[20px] flex gap-[8px] h-[34px] items-center cursor-pointer">
            <img className="w-[13px] h-[13px]" src={settingsIcon} alt="" />
            <h3 className="text-[#333333] text-[14px] font-medium leading-[14px]">Settings</h3>
          </div>
          <div className="px-[20px] flex gap-[8px] h-[34px] items-center cursor-pointer">
            <img className="w-[13px] h-[13px]" src={signoutIcon} alt="" />
            <h3 className="text-[#333333] text-[14px] font-medium leading-[14px]">Sign out</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
