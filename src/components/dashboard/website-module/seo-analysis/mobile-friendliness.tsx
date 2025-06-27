
import DashboardCard from '../../../ui-components/dashboard/dashboard-card';
import DashboardHeading from '../../../ui-components/dashboard/dashboard-heading';




const MobileFriendliness = () => {
  return (
    <DashboardCard className="flex flex-col gap-[16px]" border={true}>
      <DashboardHeading heading="Mobile Friendliness" />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        
      </div>
    </DashboardCard>
  );
};

export default MobileFriendliness;
