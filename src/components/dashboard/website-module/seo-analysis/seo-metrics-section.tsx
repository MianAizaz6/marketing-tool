// import { getSeoMetricsArray } from '../../../../utils/utilityFunctions';
// import DashboardCard from '../../../ui-components/dashboard/dashboard-card';
// import DashboardHeading from '../../../ui-components/dashboard/dashboard-heading';
// import DashboardMetricsCard from '../../../ui-components/dashboard/dashboard-metrics-card';
// import { SEOReport } from '../../../../utils/interfaces';

// const SeoMetricsSection = ({ seoData }: { seoData: SEOReport }) => {

//   return (
//     <div className="p-[16px] border border-[#3232470D] w-full rounded-[8px] bg-white flex gap-[12px]">
//       <div className="flex flex-col gap-[12px] w-full">
//         <DashboardHeading heading="SEO Metrics" />
//         <DashboardCard className="flex flex-col gap-[12px]">
//           <div className="grid grid-cols-3 gap-[16px]">
//             {getSeoMetricsArray(seoData).map(metric => (
//               <DashboardMetricsCard
//                 key={metric.value}
//                 heading={metric.label}
//                 status={metric.status}
//                 message={metric.message}
//                 boldHeading={metric.value}
//               />
//             ))}
//           </div>
//         </DashboardCard>
//       </div>
//     </div>
//   );
// };

// export default SeoMetricsSection;



// SeoMetricsSection.tsx
import { useMemo } from 'react';
import { getSeoMetricsArray } from '../../../../utils/utilityFunctions';
import DashboardCard from '../../../ui-components/dashboard/dashboard-card';
import DashboardHeading from '../../../ui-components/dashboard/dashboard-heading';
import DashboardMetricsCard from '../../../ui-components/dashboard/dashboard-metrics-card';
import type { SEOReport } from '../../../../utils/interfaces';

type Perspective = 'ownWebsiteData' | 'competitorWebsiteData';

function isComparedSEO(x: any): x is SEOReport {
  return x && typeof x.seoScore === 'object' && x.seoScore !== null && 'ownWebsiteData' in x.seoScore;
}

type Props = {
  seoData: SEOReport | SEOReport;
  perspective?: Perspective;
  title?: string;
  className?: string;
};

const MetricsGrid = ({ metrics }: { metrics: ReturnType<typeof getSeoMetricsArray> }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
    {metrics.map((metric, idx) => (
      <DashboardMetricsCard
        key={`${metric.label}-${metric.value}-${idx}`} // more stable than just value
        heading={metric.label}
        status={metric.status}
        message={metric.message}
        boldHeading={metric.value}
      />
    ))}
  </div>
);

const SeoMetricsSection = ({ seoData, perspective, title = 'SEO Metrics', className = '' }: Props) => {
  const compared = isComparedSEO(seoData);

  // If compared + perspective given: single column for that side
  if (compared && perspective) {
    const metrics = useMemo(() => getSeoMetricsArray(seoData as SEOReport, perspective), [seoData, perspective]);

    const headingLabel = perspective === 'ownWebsiteData' ? 'Our Site' : 'Competitor';

    return (
      <div className={`p-[16px] border border-[#3232470D] w-full rounded-[8px] bg-white flex gap-[12px] ${className}`}>
        <div className="flex flex-col gap-[12px] w-full">
          <DashboardHeading heading={`${title} — ${headingLabel}`} />
          <DashboardCard className="flex flex-col gap-[12px]">
            <MetricsGrid metrics={metrics} />
          </DashboardCard>
        </div>
      </div>
    );
  }

  // If compared + NO perspective: render both columns side-by-side automatically
  if (compared && !perspective) {
    const ours = useMemo(() => getSeoMetricsArray(seoData as SEOReport, 'ownWebsiteData'), [seoData]);
    const theirs = useMemo(() => getSeoMetricsArray(seoData as SEOReport, 'competitorWebsiteData'), [seoData]);

    return (
      <div className={`p-[16px] border border-[#3232470D] w-full rounded-[8px] bg-white flex gap-[12px] ${className}`}>
        <div className="flex flex-col gap-[12px] w-full">
          <DashboardHeading heading={title} />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-[16px]">
            <DashboardCard className="flex flex-col gap-[12px]">
              <DashboardHeading heading="Our Site" size="sm" />
              <MetricsGrid metrics={ours} />
            </DashboardCard>
            <DashboardCard className="flex flex-col gap-[12px]">
              <DashboardHeading heading="Competitor" size="sm" />
              <MetricsGrid metrics={theirs} />
            </DashboardCard>
          </div>
        </div>
      </div>
    );
  }

  // Single-site payload (your original behavior)
  const metrics = useMemo(() => getSeoMetricsArray(seoData as SEOReport), [seoData]);

  return (
    <div className={`p-[16px] border border-[#3232470D] w-full rounded-[8px] bg-white flex gap-[12px] ${className}`}>
      <div className="flex flex-col gap-[12px] w-full">
        <DashboardHeading heading={title} />
        <DashboardCard className="flex flex-col gap-[12px]">
          <MetricsGrid metrics={metrics} />
        </DashboardCard>
      </div>
    </div>
  );
};

export default SeoMetricsSection;
