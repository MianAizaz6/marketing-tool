import { metricsComparisonData } from '../../../../static-data';
import DashboardCard from '../../../ui-components/dashboard/dashboard-card';
import DashboardCompetitorComparisonGraph from '../../../ui-components/dashboard/dashboard-competitor-comparison-graph';
import DashboardCompetitorGraph from '../../../ui-components/dashboard/dashboard-competitor-graph';
import DashboardHeading from '../../../ui-components/dashboard/dashboard-heading';

const SpeedCompetitorSection = () => {
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
            competitorPercentage={92}
            userPercentage={82}
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
