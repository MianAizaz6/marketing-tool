import DashboardCard from '../../../ui-components/dashboard/dashboard-card';
import DashboardCircularGraph from '../../../ui-components/dashboard/dashboard-circular-graph';
import DashboardHeading from '../../../ui-components/dashboard/dashboard-heading';
import DashboardMetricsCard from '../../../ui-components/dashboard/dashboard-metrics-card';
import DashboardSubHeading from '../../../ui-components/dashboard/dashboard-subheading';

interface Props {
  data: any; // full content object
}

const ContentRelevanceSection: React.FC<Props> = ({ data }) => {
  const overviewMetrics = [
    {
      heading: 'Content Depth',
      metrics: `${data?.wordCount} WORDS`,
      status: data?.wordCount > 1200 ? 'Warning' : 'Passed',
      message: 'Optimal content length is between 850 and 1200 words.'
    },
    // {
    //   heading: 'Readability',
    //   metrics: `Score: ${data?.readabilityScoreOutOf10}/10`,
    //   status: data?.readabilityScoreOutOf10 >= 7 ? 'Passed' : data?.readabilityScoreOutOf10 >= 4 ? 'Warning' : 'Failed',
    //   message: 'Higher readability improves user engagement.'
    // },
    {
      heading: 'Media Usage',
      metrics: `${data?.imageCount + data?.videoCount} MEDIA ELEMENTS`,
      status: data?.mediaScore >= 7 ? 'Passed' : data?.mediaScore >= 4 ? 'Warning' : 'Failed',
      message: 'Images and videos make content more engaging.'
    },
    // {
    //   heading: 'Freshness',
    //   metrics: `Score: ${data?.freshnessScore}/10`,
    //   status: data?.freshnessScore >= 7 ? 'Passed' : data?.freshnessScore >= 4 ? 'Warning' : 'Failed',
    //   message: 'Recently updated content ranks better in search engines.'
    // },

  ];

  const seoMetrics = [
    {
      heading: 'Keyword Coverage',
      metrics: `${data?.keywordCoverageScore * 10}%`,
      status: data?.keywordCoverageScore >= 7 ? 'Passed' : data?.keywordCoverageScore >= 4 ? 'Warning' : 'Failed',
      message: 'Higher coverage ensures keywords are present where they matter.'
    },
    {
      heading: 'Keyword Density',
      metrics: `${data?.keywordDensity}%`,
      status: data?.keywordDensity >= 2 && data?.keywordDensity <= 3 ? 'Passed' : 'Warning',
      message: 'Avoid keyword stuffing, maintain optimal density.'
    },
    {
      heading: 'Keywords in Body',
      metrics: `${data?.keywordInBodyCount} OCCURRENCES`,
      status: data?.keywordInBodyCount > 0 ? 'Passed' : 'Warning',
      message: 'Include primary keywords in the body text.'
    },
    {
      heading: 'Keyword in Title',
      metrics: data?.keywordInTitle ? 'YES' : 'NO',
      status: data?.keywordInTitle ? 'Passed' : 'Failed',
      message: 'Title keywords improve ranking.'
    },
    {
      heading: 'Keyword in Meta',
      metrics: data?.keywordInMeta ? 'YES' : 'NO',
      status: data?.keywordInMeta ? 'Passed' : 'Failed',
      message: 'Meta keywords improve search snippet relevance.'
    },
    {
      heading: 'Keyword in H1',
      metrics: data?.keywordInH1 ? 'YES' : 'NO',
      status: data?.keywordInH1 ? 'Passed' : 'Failed',
      message: 'Primary headings should include target keywords.'
    }
  ];



  const newLocal = "text-[14px] leading-[20px] font-medium text-[#181D27]";
  return (
    <div className="p-4 border border-[#3232470D] rounded-lg bg-white flex flex-col gap-6">
      <DashboardCard className="flex flex-col gap-4">
        <DashboardHeading heading="Overview" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {overviewMetrics.map((metric, idx) => (
            <DashboardMetricsCard
              key={idx}
              heading={metric.heading}
              boldHeading={metric.metrics}
              status={metric.status as 'Passed' | 'Warning' | 'Failed'}
              message={metric.message}
            />
          ))}

          <DashboardCard className="min-h-[114px] grow flex flex-col justify-between" border>
            <DashboardSubHeading subheading="Readability" />
            <DashboardCircularGraph
              containerstyles="self-end"
              heading={`${(data?.readabilityScoreOutOf10 * 10) ?? 0}%`}
              color="#FFCC00"
              percentage={data?.readabilityScoreOutOf10 * 10 ?? 0}
              size="48px"
              headingStyles={newLocal}
            />
          </DashboardCard>

          <DashboardCard className="min-h-[114px] grow flex flex-col justify-between" border>
            <DashboardSubHeading subheading="Freshness Score" />
            <DashboardCircularGraph
              containerstyles="self-end"
              heading={`${(data?.freshnessScore * 10) ?? 0}%`}
              color="#FFCC00"
              percentage={data?.freshnessScore * 10 ?? 0}
              size="48px"
              headingStyles={newLocal}
            />
          </DashboardCard>

          <DashboardCard className="min-h-[114px] grow flex flex-col justify-between" border>
            <DashboardSubHeading subheading="Content Relevance" />
            <DashboardCircularGraph
              containerstyles="self-end"
              heading={`${(data?.contentRelevanceScore * 10) ?? 0}%`}
              color="#FFCC00"
              percentage={data?.contentRelevanceScore * 10 ?? 0}
              size="48px"
              headingStyles={newLocal}
            />
          </DashboardCard>
        </div>

      </DashboardCard>

      {/* SEO Section */}
      <DashboardCard className="flex flex-col gap-4">
        <DashboardHeading heading="SEO Signals" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {seoMetrics.map((metric, idx) => (
            <DashboardMetricsCard
              key={idx}
              heading={metric.heading}
              boldHeading={metric.metrics}
              status={metric.status as 'Passed' | 'Warning' | 'Failed'}
              message={metric.message}
            />
          ))}
        </div>
      </DashboardCard>

    </div>
  );
};

export default ContentRelevanceSection;
