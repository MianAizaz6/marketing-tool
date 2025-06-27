import { pageSpeedMetrics, seoMetrics } from '../../../../static-data';
import DashboardCard from '../../../ui-components/dashboard/dashboard-card';
import DashboardHeading from '../../../ui-components/dashboard/dashboard-heading';
import DashboardMetricsCard from '../../../ui-components/dashboard/dashboard-metrics-card';

const SeoMetricsSection = () => {
  return (
    <div className="p-[16px] border border-[#3232470D] w-full rounded-[8px] bg-white flex gap-[12px]">
      <div className='flex flex-col gap-[12px] w-full'>
        <DashboardHeading heading="SEO Metrics" />
        <DashboardCard className="flex flex-col gap-[12px]">
         
          <div className="grid grid-cols-2 gap-[16px]">
            {seoMetrics.map(metric => (
              <DashboardMetricsCard
                key={metric.metrics}
                heading={metric.heading}
                boldHeading={metric.metrics}
              />
            ))}
          </div>
        </DashboardCard>
      </div>
      <div className='flex flex-col gap-[12px] w-full'>
        <DashboardHeading heading="Page Speed " />
        <DashboardCard className="flex flex-col gap-[12px]">
         
          <div className="grid grid-cols-2 gap-[16px]">
            {pageSpeedMetrics.map(metric => (
              <DashboardMetricsCard
                key={metric.metrics}
                heading={metric.heading}
                boldHeading={metric.metrics}
              />
            ))}
          </div>
        </DashboardCard>
      </div>
    </div>
  );
};

export default SeoMetricsSection;
