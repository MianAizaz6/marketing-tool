import { Link } from "react-router-dom";

interface menuItemProps {
  menuIcon: string;
  menuIconActive: string;
  activeMenu: boolean;
  menuText: string;
  to:string,
  handleMenuClick: (heading: string) => void;
}

const DashboardMenuItem = ({
  menuIcon,
  menuIconActive,
  activeMenu,
  menuText,
  to,
  handleMenuClick,
}: menuItemProps) => {
  return (
    <div
      className="px-[8px] relative h-[34px] flex items-center cursor-pointer"
      onClick={() => handleMenuClick(menuText)}
    >
      {activeMenu ? (
        <span className="absolute top-0 left-0 h-[34px] bg-[#FF4400] w-[3px] rounded-tr-[3px] rounded-br-[3px]"></span>
      ) : undefined}
      <div
        className={`pl-[16px] pr-[12px] flex items-center h-[34px] gap-[8px] rounded-[6px] ${activeMenu ? 'bg-white w-full' : ''}`}
      >
        <div
          className={`w-[16px] h-[16px] flex justify-center items-center ${activeMenu ? 'bg-[#F8F8F8]' : 'bg-white'}`}
        >
          <img
            className="w-[13px] h-[13px]"
            src={activeMenu ? menuIconActive : menuIcon}
            alt={menuText}
          />
        </div>
        <Link to={to}
          className={`text-[14px] font-medium leading-[14px] ${activeMenu ? 'text-[#FF4400]' : 'text-[#333333]'}`}
        >
          {menuText}
        </Link>
      </div>
    </div>
  );
};

export default DashboardMenuItem;
