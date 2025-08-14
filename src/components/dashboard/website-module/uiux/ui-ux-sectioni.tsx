import DashboardCard from '../../../ui-components/dashboard/dashboard-card';
import DashboardHeading from '../../../ui-components/dashboard/dashboard-heading';
import DashboardMetricsCard from '../../../ui-components/dashboard/dashboard-metrics-card';

interface VisualUsabilityProps {
  data: {
    fontSizeHierarchyCorrect: {
      isValid: boolean;
      message: string;
    };
    ctaEmphasized: {
      status: string;
      score: number;
      suggestion: string;
      reasons: {
        positive: string[];
        negative: string[];
      };
    };
    semanticTags: {
      header: boolean;
      nav: boolean;
      footer: boolean;
      score: number;
      status: string;
      missingTags: string[];
    };
    navigationStructure: {
      hasHeaderLinks: boolean;
      hasFooterLinks: boolean;
      hasMobileMenu: boolean;
      score: number;
      status: string;
    };
    contrastAccessibility: {
      totalTextElements: number;
      totalFailingElements: number;
      score: number;
      status: string;
    };
    brokenUIElements: {
      brokenImages: number;
      overflowElements: number;
      totalIssues: number;
      score: number;
      status: string;
    };
  };
}

const VisualUsabilitySection: React.FC<VisualUsabilityProps> = ({ data }) => {
  const visualMetrics = [
    {
      heading: 'Font Size Hierarchy',
      metrics: data?.fontSizeHierarchyCorrect.isValid ? 'VALID' : 'INVALID',
      status: data?.fontSizeHierarchyCorrect.isValid ? 'Passed' : 'Failed',
      message: data?.fontSizeHierarchyCorrect.message
    },
    {
      heading: 'Call-to-Action Emphasis',
      metrics: `${data?.ctaEmphasized.status.toUpperCase()} (${data?.ctaEmphasized.score}/100)`,
      status: data?.ctaEmphasized.score >= 80 ? 'Passed' : data?.ctaEmphasized.score >= 60 ? 'Warning' : 'Failed',
      message: data?.ctaEmphasized.suggestion
    },
    {
      heading: 'Semantic Tags',
      metrics: `${data?.semanticTags.status.toUpperCase()} (${data?.semanticTags.score}/100)`,
      status: data?.semanticTags.score >= 80 ? 'Passed' : data?.semanticTags.score >= 50 ? 'Warning' : 'Failed',
      message: `Missing: ${data?.semanticTags.missingTags.join(', ')}`
    },
    {
      heading: 'Navigation Structure',
      metrics: `${data?.navigationStructure.status.toUpperCase()} (${data?.navigationStructure.score}/100)`,
      status: data?.navigationStructure.score >= 80 ? 'Passed' : 'Warning',
      message: 'Mobile nav, header/footer links improve UX.'
    },
    {
      heading: 'Contrast Accessibility',
      metrics: `${data?.contrastAccessibility.totalFailingElements} FAILURES / ${data?.contrastAccessibility.totalTextElements} ELEMENTS`,
      status: data?.contrastAccessibility.totalFailingElements > 0 ? 'Warning' : 'Passed',
      message: `${data?.contrastAccessibility.totalFailingElements > 0 ? 'Some elements lack sufficient contrast.' : 'All text passes contrast checks.'}`
    },
    {
      heading: 'Broken UI Elements',
      metrics: `${data?.brokenUIElements.totalIssues} ISSUES FOUND`,
      status: data?.brokenUIElements.totalIssues > 0 ? 'Failed' : 'Passed',
      message: 'Ensure no broken images or overflowing UI elements.'
    }
  ];

  return (
    <div className="p-[16px] border border-[#3232470D] rounded-[8px] bg-white flex flex-col gap-[24px]">
      <DashboardHeading heading="Visual & Structural Usability Metrics" />

      <DashboardCard className="flex flex-col gap-[12px]">
        <DashboardHeading heading="Interface Overview" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
          {visualMetrics.map((metric, index) => (
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

export default VisualUsabilitySection;
