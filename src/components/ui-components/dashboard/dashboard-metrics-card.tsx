import { getColor } from '../../../utils/utilityFunctions';
import Tooltip from '../tooltip';
import DashboardSubHeading from './dashboard-subheading';

const DashboardMetricsCard = ({
  heading,
  boldHeading,
  status,
  message,
}: {
  heading: string;
  boldHeading: number;
  status: 'Passed' | 'Failed' | 'Warning';
  message: string;
}) => {
  return (
    <div className="p-[24px] relative bg-white rounded-[8px] flex flex-col gap-[24px] grow">
      <DashboardSubHeading subheading={heading} />
      <h3 className="text-[#333333] text-[24px] leading-[24px] font-semibold uppercase">
        {boldHeading}
      </h3>
      <div className="absolute right-[12px]">
        <Tooltip message={message} position="right">
          <span
            className={`text-[12px]  ${status === 'Warning' ? 'text-black' : 'text-white'} px-2 py-1 rounded-full font-medium capitalize ${getColor(status)}`}
          >
            {status}
          </span>
        </Tooltip>
      </div>
    </div>
  );
};

export default DashboardMetricsCard;
