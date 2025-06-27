import DashboardCard from '../../../ui-components/dashboard/dashboard-card';
import DashboardCircularGraph from '../../../ui-components/dashboard/dashboard-circular-graph';
import DashboardHeading from '../../../ui-components/dashboard/dashboard-heading';
import SeoOverviewInfo from './seo-overview-info';

const SeoOverviewSection = () => {
  return (
    <div className="flex gap-[16px]">
      <DashboardCard className="w-full flex flex-col  gap-[12px]" border={true}>
        <SeoOverviewInfo websiteUrl='https://simpleconnect.io/' />
      </DashboardCard>
      <DashboardCard className="min-w-[260px] min-h-[210px] flex justify-center" border={true}>
        <div className="flex flex-col justify-center items-center gap-[16px]">
          <DashboardCircularGraph
            heading="91/100"
            percentage={91}
            color="#00C940"
            size={'126px'}
            headingStyles="text-[24px] leading-[38px] font-[600] text-[#0F172A]"
          />
          <DashboardHeading heading="Website Performance" />
        </div>
      </DashboardCard>

    </div>
  );
};

export default SeoOverviewSection;
