import { useState } from "react";
import { warningCircle } from "../../../../static-img-url";
import DashboardCard from "../../../ui-components/dashboard/dashboard-card";
import DashboardCircularGraph from "../../../ui-components/dashboard/dashboard-circular-graph";
import DashboardSubHeading from "../../../ui-components/dashboard/dashboard-subheading";

const FlaggedItem: React.FC<{
  label: string;
  data: any[];
  score: string
}> = ({ label, data, score }) => {

  const [showAll, setShowAll] = useState(false);

  const flaggedData = showAll ? data : data.slice(1, 4);
  return (
    <>
      <DashboardCard className="min-h-[114px] grow flex flex-col  justify-between" border>
        <DashboardSubHeading subheading={label} />
        {score && score !== '' ? <DashboardCircularGraph
          containerstyles="self-end"
          color="#FFCC00"
          heading={`${score ?? 0}%`}
          percentage={score ?? 0}
          size="48px"
          headingStyles="text-[14px] leading-[20px] font-medium text-[#181D27]"
        /> : ''}
      </DashboardCard>
      <div className="flex flex-col gap-4">
        {flaggedData.map((item, idx) => {
          const hasDimensions = item.width && item.height;

          return hasDimensions ? (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start justify-between bg-white p-4 rounded-md shadow"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 w-[25%]">
                <img src={warningCircle} alt="" />
                <div className="text-sm text-gray-800 font-medium">
                  {item.width} x {item.height}px
                </div>
              </div>

              <div className="flex flex-col gap-1 w-full md:w-[75%] relative bg-[#F8F8F8] p-3 rounded-md text-sm text-gray-800">
                <span className="absolute top-0 left-0 bg-yellow-500 w-[4px] rounded-md h-full"></span>
                {item.selector && (
                  <div>
                    <span className="font-medium">Selector:</span> {item.selector}
                  </div>
                )}
                {item.textContent && item.textContent !== '' && (
                  <div>
                    <span className="font-medium">Page:</span> {item.textContent}
                  </div>
                )}
              </div>
            </div>
          ) : (

            <div
              key={idx}
              className="flex items-center gap-2 bg-white p-4 rounded-md shadow"
            >
              <img src={warningCircle} alt="" />
              {item && (
                <div className="text-sm text-gray-800 font-medium">{item}</div>
              )}
            </div>
          );
        })}
        <span className="flex justify-center w-full"><button onClick={() => setShowAll(!showAll)} className={` bg-[#FF4400] text-white cursor-pointer  px-5 py-2 rounded-md w-fit`}>{showAll ? 'Show less' : 'View more'}</button></span>
      </div>
    </>
  );
};

export default FlaggedItem;
