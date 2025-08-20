import DashboardWebsiteModuleBtns from './dashboard-website-module-btn'
import DashboardDownloadBtn from './dashboard-download-btn'
import { Outlet, useLocation } from 'react-router-dom'

const WebsiteLayout = ({ basePath }: { basePath: string }) => {

  const location = useLocation();
  const lastSegment = location.pathname.split('/').filter(Boolean).pop() || '';

  console.log('====00000', lastSegment);

  return (
    <div className="p-[24px] flex flex-col gap-[16px]">
      <div className="flex justify-between">
        <DashboardWebsiteModuleBtns activePage={lastSegment} basePath={basePath} />
        <DashboardDownloadBtn />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default WebsiteLayout
