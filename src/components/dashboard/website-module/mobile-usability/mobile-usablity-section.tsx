import DashboardCard from '../../../ui-components/dashboard/dashboard-card';
import DashboardHeading from '../../../ui-components/dashboard/dashboard-heading';
import DashboardMetricsCard from '../../../ui-components/dashboard/dashboard-metrics-card';

interface MobileUsabilityProps {
  data: {
    missingViewport: boolean;
    horizontalScroll: {
      isScrollable: boolean;
      offendingElements: any[];
    };
    smallTapTargets: {
      score: number;
      flaggedElements: any[];
    };
    fontSizeReadability: {
      score: number;
      affectedElements: any[];
    };
  };
}

const MobileUsabilitySection: React.FC<MobileUsabilityProps> = ({ data }) => {
  const usabilityMetrics = [
    {
      heading: 'Viewport Tag',
      metrics: data?.missingViewport ? 'MISSING' : 'PRESENT',
      status: data?.missingViewport ? 'Failed' : 'Passed',
      message: 'Viewport meta tag is essential for responsive design.'
    },
    {
      heading: 'Horizontal Scroll',
      metrics: data?.horizontalScroll.isScrollable ? 'YES' : 'NO',
      status: data?.horizontalScroll.isScrollable ? 'Failed' : 'Passed',
      message: 'Pages should avoid horizontal scrolling on mobile devices.'
    },
    {
      heading: 'Small Tap Targets',
      metrics: `${data?.smallTapTargets.flaggedElements.length} FLAGGED`,
      status: data?.smallTapTargets.flaggedElements.length > 10 ? 'Failed' : 'Warning',
      message: 'Tap targets should be at least 48x48px for mobile usability.'
    },
    {
      heading: 'Font Readability',
      metrics: `${data?.fontSizeReadability.affectedElements.length} TEXT ISSUES`,
      status: data?.fontSizeReadability.affectedElements.length > 0 ? 'Warning' : 'Passed',
      message: 'Text should be at least 12px for readability on mobile devices.'
    }
  ];

  return (
    <div className="p-[16px] border border-[#3232470D] rounded-[8px] bg-white flex flex-col gap-[24px]">
      <DashboardHeading heading="Mobile Usability Metrics" />
      <DashboardCard className="flex flex-col gap-[12px]">
        <DashboardHeading heading="Usability Overview" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
          {usabilityMetrics.map((metric, index) => (
            <DashboardMetricsCard
              key={index}
              heading={metric.heading}
              boldHeading={metric.metrics}
              status={metric.status as 'Passed' | 'Failed' | 'Warning'}
              message={metric.message}
            />
          ))}
        </div>
      </DashboardCard>
    </div>
  );
};

export default MobileUsabilitySection;
