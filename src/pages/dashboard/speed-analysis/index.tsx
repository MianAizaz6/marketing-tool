import DashboardDownloadBtn from '../../../components/dashboard/website-module/dashboard-download-btn';
import DashboardWebsiteModuleBtns from '../../../components/dashboard/website-module/dashboard-website-module-btn';
import SpeedCompetitorSection from '../../../components/dashboard/website-module/speed-analysis/speed-competitor-section';
import SpeedImprovmentsSection from '../../../components/dashboard/website-module/speed-analysis/speed-improvments-section';
import SpeedMetricsSection from '../../../components/dashboard/website-module/speed-analysis/speed-metrics-section';
import SpeedOverviewSection from '../../../components/dashboard/website-module/speed-analysis/speed-overview-section';

const SpeedAnalysis = () => {
  return (
    <div className="p-[24px] flex flex-col gap-[16px]">
      <div className="flex justify-between">
        <DashboardWebsiteModuleBtns />
        <DashboardDownloadBtn />
      </div>
      <SpeedOverviewSection />
      <SpeedMetricsSection />
      <SpeedImprovmentsSection />
      <SpeedCompetitorSection />
    </div>
  );
};

export default SpeedAnalysis;
