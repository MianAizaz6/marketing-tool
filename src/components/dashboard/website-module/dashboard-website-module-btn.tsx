import { useState } from 'react';
import { websiteModuleBtns } from '../../../static-data';

const DashboardWebsiteModuleBtns = () => {
  const [activePage, setActivePage] = useState('Web Speed');
  const changePage = (pageLink: string) => {
    setActivePage(pageLink);
  };
  return (
    <div className="flex bg-[#FAFAFA] rounded-[3px]">
      {websiteModuleBtns.map(item => (
        <button
          className={`px-[12px] cursor-pointer h-[32px] text-[14px] flex items-center rounded-[3px] justify-center ${activePage === item.name ? 'bg-[#0F172A] text-white' : 'text-[#334155]'}`}
          key={item.link}
          onClick={() => changePage(item.name)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default DashboardWebsiteModuleBtns;
