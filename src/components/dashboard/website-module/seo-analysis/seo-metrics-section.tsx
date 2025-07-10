import { getSeoMetricsArray } from '../../../../utils/utilityFunctions';
import DashboardCard from '../../../ui-components/dashboard/dashboard-card';
import DashboardHeading from '../../../ui-components/dashboard/dashboard-heading';
import DashboardMetricsCard from '../../../ui-components/dashboard/dashboard-metrics-card';
import { SEOReport } from '../../../../utils/interfaces';

const SeoMetricsSection = ({ seoData }: { seoData: SEOReport }) => {
  return (
    <div className="p-[16px] border border-[#3232470D] w-full rounded-[8px] bg-white flex gap-[12px]">
      <div className="flex flex-col gap-[12px] w-full">
        <DashboardHeading heading="SEO Metrics" />
        <DashboardCard className="flex flex-col gap-[12px]">
          <div className="grid grid-cols-3 gap-[16px]">
            {getSeoMetricsArray(seoData).map(metric => (
              <DashboardMetricsCard
                key={metric.value}
                heading={metric.label}
                status={metric.status}
                message={metric.message}
                boldHeading={metric.value}
              />
            ))}
          </div>
        </DashboardCard>
      </div>
    </div>
  );
};

export default SeoMetricsSection;
