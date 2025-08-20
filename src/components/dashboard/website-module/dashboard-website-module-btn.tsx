
import { useNavigate } from 'react-router-dom';
import { websiteModuleBtns } from '../../../static-data';

const DashboardWebsiteModuleBtns = ({ activePage, basePath }: { activePage: string, basePath: string }) => {

  const navigate = useNavigate();

  // const basePath = '/dashboard/website-audit';

  const active = () => {
    if (activePage === 'website-audit') {
      return '/'
    }
    else if (activePage === 'competitor-analysis') {
      return '/'
    }
    else {
      return `/${activePage}`
    }
  }
  return (
    <div className="flex bg-[#FAFAFA] rounded-[3px]">
      {websiteModuleBtns.map(item => (
        <button
          className={`px-[12px] cursor-pointer h-[32px] text-[14px] flex items-center rounded-[3px] justify-center ${active() === item.link ? 'bg-[#0F172A] text-white' : 'text-[#334155]'}`}
          key={item.link}
          onClick={() => navigate(item.link === '/' ? basePath : `${basePath}${item.link}`)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default DashboardWebsiteModuleBtns;
