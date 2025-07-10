import { useEffect, useState } from 'react';
import { arrowDown } from '../../static-img-url';
import PricingButton from '../ui-components/dashboard/pricing-button';
import { getCurrentWorkspace } from '../../utils/utilityFunctions';
import { Link } from 'react-router-dom';
import { DashboardWorkspaceSwitcherProps, WorkspaceItem } from '../../utils/interfaces';

const DashboardWorkspaceSwitcher: React.FC<DashboardWorkspaceSwitcherProps> = ({ data }) => {
  const [openWorkspace, setOpenWorkSpace] = useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState<WorkspaceItem | null>(
    data?.[0] || null
  );

  const toggleWorkSpace = () => {
    setOpenWorkSpace(!openWorkspace);
  };

  useEffect(() => {
    const storedWorkspace = getCurrentWorkspace();
    if (storedWorkspace) {
      setSelectedWorkspace(storedWorkspace);
    }
  }, []);

  const handleWorkspaceSelect = (workspace: WorkspaceItem) => {
    setSelectedWorkspace(workspace);
    localStorage.removeItem('selectedWorkspace');
    localStorage.setItem('selectedWorkspace', JSON.stringify(workspace));
    setOpenWorkSpace(false);
  };

  return (
    <div className="px-[24px] flex gap-[12px] h-[52px] justify-between items-center border-b border-[#E2E8F0] relative">
      <div className="flex gap-[8px] items-center cursor-pointer" onClick={() => toggleWorkSpace()}>
        <div className="w-[28px] h-[28px] rounded-[6px] flex items-center justify-center bg-gradient-to-b from-[#00C940] to-[#0099FF] text-[14px] font-bold text-white capitalize">
          {selectedWorkspace?.workspaceName?.charAt(0) || 'PW'}
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="text-[14px] font-medium line-clamp-1">
            {' '}
            {selectedWorkspace?.workspaceName || 'Product Workspace'}
          </h3>
          <p className="text-[#666666] text-[12px] ">Free plan</p>
        </div>
        <img
          className={`w-[12px] h-[12px] ml-1 cursor-pointer transition-transform duration-300 ${openWorkspace ? 'rotate-180' : 'rotate-0'}`}
          src={arrowDown}
          alt="Arrow-down"
        />
      </div>
      <PricingButton />

      <div
        className={`
          absolute top-12 left-0 w-full z-10 rounded-b-[8px] bg-white shadow-lg overflow-hidden
          transform transition-all duration-300 ease-in-out
          ${openWorkspace ? 'opacity-100 translate-y-0 max-h-[400px]' : 'opacity-0 -translate-y-2 max-h-0 pointer-events-none'}
        `}
      >
        {/* Replace this with actual workspace list */}
        <div>
          {' '}
          <Link to={'/onboarding'}>
            {' '}
            <button className="bg-[#fa7240] text-white w-full text-sm cursor-pointer  px-5 py-2 ">
              + Create new workspace
            </button>{' '}
          </Link>
        </div>
        <div className="p-3 text-sm text-gray-700">
          {data &&
            data.length &&
            data.map((item, index) => {
              const firstChar = item?.workspaceName?.trim()?.charAt(0) || '?';
              const name = item?.workspaceName || 'dsfasdfasdf Workspace';

              return (
                <div
                  key={index}
                  className="flex gap-[8px] items-center mb-2 cursor-pointer"
                  onClick={() => handleWorkspaceSelect(item)}
                >
                  <div className="w-[22px] h-[22px] uppercase rounded-[6px] flex items-center justify-center bg-gradient-to-b from-[#00C940] to-[#0099FF] text-[14px] text-white">
                    {firstChar}
                  </div>
                  <div className="flex flex-col justify-between capitalize relative">
                    <h3 className="text-gray-700 text-[14px] font-medium line-clamp-1">{name}</h3>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DashboardWorkspaceSwitcher;
