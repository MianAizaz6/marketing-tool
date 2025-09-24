import { tickCircle, warningCircle } from '../../../../static-img-url';
import DashboardCard from '../../../ui-components/dashboard/dashboard-card';
import FlaggedItem from './flaggedItems';

interface MobileUsabilityProps {
  data: object;
}

const MobileUsabilitySection: React.FC<MobileUsabilityProps> = ({ data }) => {
  const { missingViewport, horizontalScroll, smallTapTargets, fontSizeReadability } = data;

  const usabilityMetrics = [

    {
      heading: 'Viewport Tag',
      status: missingViewport ? 'Failed' : 'Passed',
      value: missingViewport ? 'MISSING' : 'PRESENT',
      message: 'Viewport meta tag is essential for responsive design.',
    },
    {
      heading: 'Font Readability',
      status: fontSizeReadability.affectedElements.length > 0 ? 'Warning' : 'Passed',
      value: `${fontSizeReadability.affectedElements.length} TEXT ISSUES`,
      message: 'Text should be at least 12px for readability on mobile devices.',
      details: fontSizeReadability.affectedElements,
    },
  ];

  const renderDetails = (details: any) => {
    if (!details || details.length === 0) return <span className="text-gray-400">No issues found.</span>;
    return (
      <ul className="list-disc ml-4 space-y-1 text-sm text-gray-600 max-h-48 overflow-y-auto">
        {details.map((item: any, idx: number) => {
          if (typeof item === 'string') return <li key={idx}>{item}</li>;
          return (
            <li key={idx}>
              <strong>{item.selector}</strong> - {item.width}x{item.height}px {item.textContent && `(${item.textContent})`}
            </li>
          );
        })}
      </ul>
    );
  };



  return (
    <div className="p-4 border border-[#3232470D] rounded-lg bg-white flex flex-col gap-6">
      {/* Overall Score */}

      {/* Metrics Cards */}
      <FlaggedItem data={smallTapTargets.flaggedElements} label="Small Tap Targets" score={smallTapTargets.score} />
      <FlaggedItem data={horizontalScroll.offendingElements} label="Horizontal Scroll" score="" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {usabilityMetrics.map((metric, idx) => (
          <DashboardCard key={idx} className="p-4 flex flex-col gap-2">
            <div className='flex justify-between'>
              <h3 className="font-semibold">{metric.heading}</h3>
              <img src={metric.status === 'Warning' || metric.status === "Failed" ? warningCircle : tickCircle} alt="wanring img" />
            </div>
            <p className="text-gray-800 font-bold">{metric.value}</p>
            <p className="text-sm text-gray-600">{metric.message}</p>
            {metric.details && (
              <div className="mt-2 bg-gray-50 p-2 rounded border border-gray-100">
                <span className="text-gray-700 font-medium">Details:</span>
                {renderDetails(metric.details)}
              </div>
            )}
          </DashboardCard>
        ))}
      </div>
    </div>
  );
};

export default MobileUsabilitySection;
