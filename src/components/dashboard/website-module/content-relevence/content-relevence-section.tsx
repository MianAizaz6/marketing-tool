import DashboardCard from '../../../ui-components/dashboard/dashboard-card';
import DashboardHeading from '../../../ui-components/dashboard/dashboard-heading';
import DashboardMetricsCard from '../../../ui-components/dashboard/dashboard-metrics-card';

interface Props {
  data: {
    wordCount: number;
    updatedAt: string;
    keywordCoverageScore: number;
    readabilityScoreOutOf10: number;
    keywordDensity: number;
    imageCount: number;
    keywordInBodyCount: number;
    keywordInTitle: boolean;
    keywordInMeta: boolean;
    keywordInH1: boolean;
  };
}

const ContentRelevenceSection: React.FC<Props> = ({ data }) => {
  const overviewMetrics = [
    {
      heading: 'Content Depth',
      metrics: `${data?.wordCount} WORDS PER PAGE`,
      status: data?.wordCount > 1200 ? 'Warning' : 'Passed',
      message: 'Optimal content length is between 850 and 1200 words.'
    },
    {
      heading: 'Relevance & Freshness',
      metrics: `UPDATED ${new Date(data?.updatedAt).toLocaleDateString()}`,
      status: data?.updatedAt ? 'Passed' : 'Failed',
      message: 'Recent updates improve search engine relevance.'
    },
    {
      heading: 'Keyword Optimization',
      metrics: `${(data?.keywordCoverageScore / 10) * 100}% TARGET MATCH`,
      status: data?.keywordCoverageScore >= 7 ? 'Passed' : data?.keywordCoverageScore >= 4 ? 'Warning' : 'Failed',
      message: 'Higher target match means better keyword relevance.'
    },
    {
      heading: 'Readability Score',
      metrics: `Score: ${data?.readabilityScoreOutOf10}/10`,
      status: data?.readabilityScoreOutOf10 >= 7 ? 'Passed' : data?.readabilityScoreOutOf10 >= 4 ? 'Warning' : 'Failed',
      message: 'Higher readability makes content more user-friendly.'
    }
  ];

  const seoMetrics = [
    {
      heading: 'Alt Text & Accessibility',
      metrics: `${data?.imageCount > 0 ? ((data?.keywordInBodyCount / data?.imageCount) * 100).toFixed(1) : '0'}% OF IMAGES HAVE ALT TEXT`,
      status: data?.imageCount > 0 && data?.keywordInBodyCount / data?.imageCount >= 0.8 ? 'Passed' : 'Warning',
      message: 'Alt text helps visually impaired users and improves SEO.'
    },
    {
      heading: 'Internal Linking',
      metrics: `${data?.keywordInBodyCount} INTERNAL LINKS FOUND`,
      status: data?.keywordInBodyCount >= 3 ? 'Passed' : 'Warning',
      message: 'More internal links improve navigation and crawlability.'
    },
    {
      heading: 'Keyword Placement in Title',
      metrics: data?.keywordInTitle ? 'YES' : 'NO',
      status: data?.keywordInTitle ? 'Passed' : 'Failed',
      message: 'Having your keyword in the title significantly boosts SEO.'
    },
    {
      heading: 'Keyword in Meta Tags',
      metrics: data?.keywordInMeta ? 'YES' : 'NO',
      status: data?.keywordInMeta ? 'Passed' : 'Failed',
      message: 'Keywords in meta descriptions improve click-through rate.'
    },
    {
      heading: 'Keyword in H1 Tags',
      metrics: data?.keywordInH1 ? 'YES' : 'NO',
      status: data?.keywordInH1 ? 'Passed' : 'Failed',
      message: 'Primary headings should include target keywords.'
    }
  ];

  return (
    <div className="p-[16px] border border-[#3232470D] rounded-[8px] bg-white flex flex-col gap-[24px]">
      <DashboardHeading heading="Content Relevance Metrics" />

      <DashboardCard className="flex flex-col gap-[12px]">
        <DashboardHeading heading="Website Overview" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
          {overviewMetrics.map((metric, index) => (
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

      <DashboardCard className="flex flex-col gap-[12px]">
        <DashboardHeading heading="SEO Signals & Accessibility" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
          {seoMetrics.map((metric, index) => (
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

export default ContentRelevenceSection;
