import { tickCircle, warningCircle } from '../../../../static-img-url';
import { SEOReport } from '../../../../utils/interfaces';
import { getSeoMetaTestResults } from '../../../../utils/utilityFunctions';
import Tooltip from '../../../ui-components/tooltip';

const MetaTestCard = ({ seoData }: { seoData: SEOReport }) => {
  const metaTestResults = getSeoMetaTestResults(seoData);

  const statusCheck = (str: string) => {
    if (str === 'pass') {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="w-full space-y-6">
      {metaTestResults.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row items-start  justify-between bg-white p-4 rounded-md shadow "
        >
          <div className="flex items-start md:items-center gap-2">
            <div className="text-lg mt-0.5">
              <Tooltip message={item.tooltip} position="left">
                <img src={statusCheck(item.status) ? tickCircle : warningCircle} alt="" />
              </Tooltip>
            </div>
            <div className="font-semibold text-sm text-gray-800">{item.label}</div>
          </div>

          <div className="flex flex-col gap-2 w-[75%]">
            <div className="mt-2 md:mt-0 text-sm text-gray-700">{item.message}</div>
            <div className="mt-2 md:mt-0 w-full md:w-auto relative bg-[#F8F8F8] p-3 rounded-md text-sm text-gray-800">
              <span
                className={`absolute top-0 left-0 ${statusCheck(item.status) ? 'bg-[#00C951]' : 'bg-[#FFA500]'} w-[4px] rounded-md h-full`}
              ></span>
              <div>
                <span className="font-medium">Text:</span> {item.text}
              </div>
              {item.length > 0 ? (
                <div>
                  <span className="font-medium">Length:</span> {item.length}{' '}
                  {item.label === 'Heading Structure' || item.label === 'H1 Tags'
                    ? 'Headings'
                    : 'characters'}
                </div>
              ) : undefined}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetaTestCard;
