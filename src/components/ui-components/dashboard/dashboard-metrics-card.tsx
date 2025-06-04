import DashboardSubHeading from './dashboard-subheading';

const DashboardMetricsCard = ({
  heading,
  boldHeading,
}: {
  heading: string;
  boldHeading: string;
}) => {
  return (
    <div className="p-[24px] bg-white rounded-[8px] flex flex-col gap-[24px] grow">
      <DashboardSubHeading subheading={heading} />
      <h3 className="text-[#333333] text-[24px] leading-[24px] font-semibold uppercase">
        {boldHeading}
      </h3>
    </div>
  );
};

export default DashboardMetricsCard;
