import React from 'react';
import DashboardCard from '../../../ui-components/dashboard/dashboard-card';
import DashboardHeading from '../../../ui-components/dashboard/dashboard-heading';
import DashboardMetricsCard from '../../../ui-components/dashboard/dashboard-metrics-card';

type PassWarnFail = 'Passed' | 'Warning' | 'Failed';

interface VisualUsabilityProps {
  data: {
    fontSizeHierarchyCorrect: {
      isValid: boolean;
      message: string;
    };
    ctaEmphasized: {
      status: string; // e.g., "good", "needs_improvement"
      score: number;  // 0..100
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

/* --------------------------------- helpers -------------------------------- */

const toPWF = (statusOrScore: string | number): PassWarnFail => {
  if (typeof statusOrScore === 'number') {
    if (statusOrScore >= 80) return 'Passed';
    if (statusOrScore >= 60) return 'Warning';
    return 'Failed';
  }
  const s = statusOrScore.toLowerCase();
  if (['ok', 'good', 'pass', 'passed', 'green'].includes(s)) return 'Passed';
  if (['warn', 'warning', 'medium'].includes(s)) return 'Warning';
  if (['fail', 'failed', 'bad', 'red'].includes(s)) return 'Failed';
  return 'Warning';
};

const BoolRow = ({ label, value }: { label: string; value: boolean }) => (
  <div className="flex items-center py-4">
    <span className="text-sm text-[#0B0F1A]/70">{label}</span>
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${value ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
        }`}
    >
      {value ? 'Yes' : 'No'}
    </span>
  </div>
);

const KV = ({ k, v }: { k: string; v: React.ReactNode }) => (
  <div className="flex items-center justify-between py-1.5">
    <span className="text-sm text-[#0B0F1A]/70">{k}</span>
    <span className="text-sm font-medium text-[#0B0F1A]">{v}</span>
  </div>
);

const Chips = ({ items }: { items: string[] }) =>
  items?.length ? (
    <div className="flex flex-wrap gap-2">
      {items.map((t, i) => (
        <span key={`${t}-${i}`} className="rounded-full bg-[#0B0F1A]/5 text-[#0B0F1A]/80 px-2.5 py-1 text-xs">
          {t}
        </span>
      ))}
    </div>
  ) : (
    <span className="text-sm text-[#0B0F1A]/50">None</span>
  );

const List = ({ items }: { items: string[] }) =>
  items?.length ? (
    <ul className="list-disc pl-5 space-y-1">
      {items.map((li, idx) => (
        <li key={idx} className="text-sm text-[#0B0F1A]/80">
          {li}
        </li>
      ))}
    </ul>
  ) : (
    <span className="text-sm text-[#0B0F1A]/50">No items</span>
  );

const Bar = ({ value }: { value: number }) => (
  <div className="w-full h-2 rounded bg-[#0B0F1A]/10 overflow-hidden">
    <div className="h-full bg-emerald-500" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
  </div>
);

/* -------------------------------- component -------------------------------- */

const VisualUsabilitySection: React.FC<VisualUsabilityProps> = ({ data }) => {
  const visualMetrics = [
    {
      heading: 'Font Size Hierarchy',
      metrics: data?.fontSizeHierarchyCorrect.isValid ? 'VALID' : 'INVALID',
      status: data?.fontSizeHierarchyCorrect.isValid ? 'Passed' : 'Failed',
      message: data?.fontSizeHierarchyCorrect.message,
    },
    {
      heading: 'CTA Emphasis',
      metrics: `${data?.ctaEmphasized.status?.toUpperCase?.() ?? 'UNKNOWN'} (${data?.ctaEmphasized.score}/100)`,
      status: toPWF(data?.ctaEmphasized.score),
      message: data?.ctaEmphasized.suggestion,
    },
    {
      heading: 'Semantic Tags',
      metrics: `${data?.semanticTags.status?.toUpperCase?.() ?? 'UNKNOWN'} (${data?.semanticTags.score}/100)`,
      status: toPWF(data?.semanticTags.score),
      message:
        data?.semanticTags?.missingTags?.length
          ? `Missing: ${data.semanticTags.missingTags.join(', ')}`
          : 'All critical tags present.',
    },
    {
      heading: 'Navigation Structure',
      metrics: `${data?.navigationStructure.status?.toUpperCase?.() ?? 'UNKNOWN'} (${data?.navigationStructure.score}/100)`,
      status: toPWF(data?.navigationStructure.score),
      message: 'Header/footer links and a mobile menu improve UX.',
    },
    {
      heading: 'Contrast Accessibility',
      metrics: `${data?.contrastAccessibility.totalFailingElements} FAIL / ${data?.contrastAccessibility.totalTextElements} TEXT`,
      status: data?.contrastAccessibility.totalFailingElements > 0 ? ('Warning' as PassWarnFail) : 'Passed',
      message:
        data?.contrastAccessibility.totalFailingElements > 0
          ? 'Some text fails WCAG contrast. Increase color contrast.'
          : 'All text passes contrast checks.',
    },
    {
      heading: 'Broken UI Elements',
      metrics: `${data?.brokenUIElements.totalIssues} ISSUES`,
      status: data?.brokenUIElements.totalIssues > 0 ? ('Failed' as PassWarnFail) : 'Passed',
      message: 'Ensure no broken images or overflowing elements.',
    },
  ];

  const totalPassed =
    (data?.fontSizeHierarchyCorrect.isValid ? 1 : 0) +
    (toPWF(data?.ctaEmphasized.score) === 'Passed' ? 1 : 0) +
    (toPWF(data?.semanticTags.score) === 'Passed' ? 1 : 0) +
    (toPWF(data?.navigationStructure.score) === 'Passed' ? 1 : 0) +
    (data?.contrastAccessibility.totalFailingElements === 0 ? 1 : 0) +
    (data?.brokenUIElements.totalIssues === 0 ? 1 : 0);

  const overall = Math.round((totalPassed / 6) * 100);

  return (
    <div className="p-4 sm:p-5 border border-[#3232470D] rounded-[8px] bg-white flex flex-col gap-6">
      <DashboardHeading heading="Visual & Structural Usability Metrics" />

      {/* Overview */}
      <DashboardCard className="flex flex-col gap-3">
        <DashboardHeading heading="Overview" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visualMetrics.map((metric, index) => (
            <DashboardMetricsCard
              key={index}
              heading={metric.heading}
              boldHeading={metric.metrics}
              status={metric.status as PassWarnFail}
              message={metric.message}
            />
          ))}
        </div>

        {/* Overall score bar */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[#0B0F1A]/70">Overall pass ratio</span>
            <span className="text-sm font-semibold">{overall}%</span>
          </div>
          <Bar value={overall} />
        </div>
      </DashboardCard>

      {/* Font Size Hierarchy */}
      <DashboardCard className="flex flex-col gap-4">
        <DashboardHeading heading="Font Size Hierarchy" />
        <KV k="Status" v={data.fontSizeHierarchyCorrect.isValid ? 'Valid' : 'Invalid'} />
        <p className="text-sm text-[#0B0F1A]/80">{data.fontSizeHierarchyCorrect.message}</p>
      </DashboardCard>

      {/* CTA Emphasis */}
      <DashboardCard className="flex flex-col gap-4">
        <DashboardHeading heading="Call-to-Action Emphasis" />
        <div className="grid sm:grid-cols-2 gap-4">
          <KV k="Status" v={data.ctaEmphasized.status} />
          <KV k="Score" v={`${data.ctaEmphasized.score}/100`} />
        </div>
        <div>
          <p className="text-sm font-medium text-[#0B0F1A] mb-1">Suggestion</p>
          <p className="text-sm text-[#0B0F1A]/80">{data.ctaEmphasized.suggestion}</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-medium text-[#0B0F1A] mb-1">What’s working</p>
            <List items={data.ctaEmphasized.reasons?.positive ?? []} />
          </div>
          <div>
            <p className="text-sm font-medium text-[#0B0F1A] mb-1">Needs attention</p>
            <List items={data.ctaEmphasized.reasons?.negative ?? []} />
          </div>
        </div>
      </DashboardCard>

      {/* Semantic Tags */}
      <DashboardCard className="flex flex-col gap-4">
        <DashboardHeading heading="Semantic Tags" />
        <div className="grid sm:grid-cols-3 gap-4">
          <BoolRow label="Header tag present" value={data.semanticTags.header} />
          <BoolRow label="Nav tag present" value={data.semanticTags.nav} />
          <BoolRow label="Footer tag present" value={data.semanticTags.footer} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <KV k="Score" v={`${data.semanticTags.score}/100`} />
          <KV k="Status" v={data.semanticTags.status} />
        </div>
        <div>
          <p className="text-sm font-medium text-[#0B0F1A] mb-1">Missing tags</p>
          <Chips items={data.semanticTags.missingTags ?? []} />
        </div>
      </DashboardCard>

      {/* Navigation Structure */}
      <DashboardCard className="flex flex-col gap-4">
        <DashboardHeading heading="Navigation Structure" />
        <div className="grid sm:grid-cols-3 gap-4">
          <BoolRow label="Header links" value={data.navigationStructure.hasHeaderLinks} />
          <BoolRow label="Footer links" value={data.navigationStructure.hasFooterLinks} />
          <BoolRow label="Mobile menu" value={data.navigationStructure.hasMobileMenu} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <KV k="Score" v={`${data.navigationStructure.score}/100`} />
          <KV k="Status" v={data.navigationStructure.status} />
        </div>
      </DashboardCard>

      {/* Contrast Accessibility */}
      <DashboardCard className="flex flex-col gap-4">
        <DashboardHeading heading="Contrast Accessibility" />
        <div className="grid sm:grid-cols-3 gap-4">
          <KV k="Total text elements" v={data.contrastAccessibility.totalTextElements} />
          <KV k="Failing elements" v={data.contrastAccessibility.totalFailingElements} />
          <KV k="Status" v={data.contrastAccessibility.status} />
        </div>
        <div>
          <p className="text-sm text-[#0B0F1A]/70 mb-2">
            Pass rate: {Math.max(0, data.contrastAccessibility.totalTextElements - data.contrastAccessibility.totalFailingElements)}/
            {data.contrastAccessibility.totalTextElements}
          </p>
          <Bar
            value={
              data.contrastAccessibility.totalTextElements
                ? ((data.contrastAccessibility.totalTextElements - data.contrastAccessibility.totalFailingElements) /
                  data.contrastAccessibility.totalTextElements) *
                100
                : 0
            }
          />
        </div>
      </DashboardCard>

      {/* Broken UI Elements */}
      <DashboardCard className="flex flex-col gap-4">
        <DashboardHeading heading="Broken UI Elements" />
        <div className="grid sm:grid-cols-4 gap-4">
          <KV k="Broken images" v={data.brokenUIElements.brokenImages} />
          <KV k="Overflow elements" v={data.brokenUIElements.overflowElements} />
          <KV k="Total issues" v={data.brokenUIElements.totalIssues} />
          <KV k="Score" v={`${data.brokenUIElements.score}/100`} />
        </div>
        <KV k="Status" v={data.brokenUIElements.status} />
        {data.brokenUIElements.totalIssues > 0 ? (
          <p className="text-sm text-[#0B0F1A]/80">
            Fix broken <strong>img</strong> sources and resolve any overflow causing horizontal scroll or clipped UI.
          </p>
        ) : (
          <p className="text-sm text-emerald-700">No broken UI issues detected.</p>
        )}
      </DashboardCard>
    </div>
  );
};

export default VisualUsabilitySection;
