import { speedMetrics } from '../../../../static-data';
import DashboardCard from '../../../ui-components/dashboard/dashboard-card';
import DashboardHeading from '../../../ui-components/dashboard/dashboard-heading';
import DashboardMetricsCard from '../../../ui-components/dashboard/dashboard-metrics-card';

const SpeedMetricsSection = () => {
  return (
    <div className="p-[16px] border border-[#3232470D] rounded-[8px] bg-white flex flex-col gap-[12px]">
      <DashboardHeading heading="Website Speed Metrics" />
      <DashboardCard className="flex flex-col gap-[12px]">
        <DashboardHeading heading="Website Overview" />
        <div className="flex gap-[16px]">
          {speedMetrics.map(metric => (
            <DashboardMetricsCard
              key={metric.metrics}
              heading={metric.heading}
              boldHeading={metric.metrics}
            />
          ))}
        </div>
      </DashboardCard>
    </div>
  );
};

export default SpeedMetricsSection;
