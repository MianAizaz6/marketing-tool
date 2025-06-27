
import { metaTestData } from '../../../../static-data';
import DashboardCard from '../../../ui-components/dashboard/dashboard-card';
import DashboardHeading from '../../../ui-components/dashboard/dashboard-heading';
import MetaTestCard from './meta-tag-result';


const SeoCommonIssues = () => {
  return (
    <DashboardCard className="flex flex-col gap-[16px]" border={true}>
      <DashboardHeading heading="SEO Common Issues" />
      <div className="grid grid-cols-1 gap-8">
        <MetaTestCard data={metaTestData} />
      </div>
    </DashboardCard>
  );
};

export default SeoCommonIssues;
