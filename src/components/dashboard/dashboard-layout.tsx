import DashboardHeader from './dashboard-header';
import DashboardSidebar from './dashboard-sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div>
      <DashboardSidebar />
      <div className="dashboard-page pl-[270px]">
        <DashboardHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
