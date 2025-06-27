import { FC } from 'react';
import { metricsComparisonDataProps } from '../../../../static-data';
import DashboardCard from '../../../ui-components/dashboard/dashboard-card';
import DashboardCompetitorComparisonGraph from '../../../ui-components/dashboard/dashboard-competitor-comparison-graph';
import DashboardCompetitorGraph from '../../../ui-components/dashboard/dashboard-competitor-graph';
import DashboardHeading from '../../../ui-components/dashboard/dashboard-heading';
interface SpeedCompetitorSectionProps {
  websitePerformance: number;
  compitatorPerformance: number;
  speedData: object
}

const SpeedCompetitorSection: FC<SpeedCompetitorSectionProps> = ({
  websitePerformance,
  compitatorPerformance,
  speedData
}) => {

  const ownData = speedData?.ownWebsiteStats;
  const compData = speedData?.competitorWebsiteStats;

  const parseMetric = (value?: string) =>
    value ? parseFloat(value.replace(/[^\d.]/g, '')) : 0;

  const metricsComparisonData: metricsComparisonDataProps[] = [
    {
      metric: 'CLS',
      you: parseMetric(ownData?.timeToInteractive),
      competitor: parseMetric(compData?.timeToInteractive),
      unit: '',
    },
    {
      metric: 'FCP',
      you: parseMetric(ownData?.firstContentfulPaint),
      competitor: parseMetric(compData?.firstContentfulPaint),
      unit: 's',
    },
    {
      metric: 'LCP',
      you: parseMetric(ownData?.largestContentfulPaint),
      competitor: parseMetric(compData?.largestContentfulPaint),
      unit: 's',
    },
    {
      metric: 'TBT',
      you: parseMetric(ownData?.totalBlockingTime),
      competitor: parseMetric(compData?.totalBlockingTime),
      unit: 'MS',
    },
  ];

  return (
    <DashboardCard className="flex flex-col gap-[16px]">
      <DashboardHeading heading="Competitor Comparison" />
      <div className="flex gap-[16px]">
        <DashboardCard
          className="min-w-[280px] flex flex-col justify-center items-center"
          border={true}
        >
          <DashboardHeading heading="Your Website Score" />
          <DashboardCompetitorComparisonGraph
            competitorPercentage={compitatorPerformance}
            userPercentage={websitePerformance}
            competitorColor="#0F172A"
            userColor="#FF4400"
            headingStyles="text-[#181D27] font-semibold text-[20px] leading-[30px]"
            size="152px"
            heading="Website"
          />
        </DashboardCard>
        <DashboardCard className="w-full" border={true}>
          <DashboardCompetitorGraph data={metricsComparisonData} />
        </DashboardCard>
      </div>
    </DashboardCard>
  );
};

export default SpeedCompetitorSection;
