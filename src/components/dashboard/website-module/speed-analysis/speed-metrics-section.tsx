import { WebsiteSpeedStats } from '../../../../types/website-speed-stats';
import DashboardCard from '../../../ui-components/dashboard/dashboard-card';
import DashboardHeading from '../../../ui-components/dashboard/dashboard-heading';
import DashboardMetricsCard from '../../../ui-components/dashboard/dashboard-metrics-card';

type Props = {
  speedData: WebsiteSpeedStats;
};

const SpeedMetricsSection: React.FC<Props> = ({ speedData }) => {

  const { firstContentfulPaint, largestContentfulPaint, totalBlockingTime, speedIndex, timeToInteractive } = (speedData?.ownWebsiteStats ?? {}) as Partial<WebsiteSpeedStats>;
  const metrics = [
    {
      heading: 'First Contentful Paint',
      metrics: firstContentfulPaint,
    },
    {
      heading: 'Largest Contentful Paint',
      metrics: largestContentfulPaint,
    },
    {
      heading: 'Total Blocking Time',
      metrics: totalBlockingTime,
    },
    {
      heading: 'Cumulative Layout Shift',
      metrics: timeToInteractive,
    },
    {
      heading: 'Speed Index',
      metrics: speedIndex,
    },
  ]


  return (
    <div className="p-[16px] border border-[#3232470D] rounded-[8px] bg-white flex flex-col gap-[12px]">
      <DashboardHeading heading="Website Speed Metrics" />
      <DashboardCard className="flex flex-col gap-[12px]">
        <DashboardHeading heading="Website Overview" />
        <div className="flex gap-[16px]">
          {metrics && metrics.length && metrics.map((metric, index) => (
            <DashboardMetricsCard
              key={index}
              heading={metric.heading}
              boldHeading={metric.metrics ?? 'O MS'}
            />
          ))}
        </div>
      </DashboardCard>
    </div>
  );
};

export default SpeedMetricsSection;
