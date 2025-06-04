import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import DashboardSubHeading from './dashboard-subheading';

type ComparisonGraphProps = {
  userPercentage: number;
  competitorPercentage: number;
  heading: string;
  userColor?: string;
  competitorColor?: string;
  size?: string;
  headingStyles: string;
  containerStyles?: string;
};

const DashboardCompetitorComparisonGraph = ({
  userPercentage,
  competitorPercentage,
  heading,
  userColor = '#3b82f6', // Default blue
  competitorColor = '#f97316', // Orange
  size = '100px',
  headingStyles,
  containerStyles,
}: ComparisonGraphProps) => {
  return (
    <div className="flex flex-col p-[24px] gap-[24px] items-center">
      <div
        className={`flex flex-col justify-center items-center gap-2 ${containerStyles}`}
        style={{ width: size, height: size }}
      >
        <div className="relative w-full h-full">
          {/* Outer Circle: Competitor */}
          <CircularProgressbar
            value={competitorPercentage}
            text={''}
            strokeWidth={6}
            styles={buildStyles({
              pathColor: competitorColor,
              trailColor: '#f3f4f6',
            })}
          />
          {/* Inner Circle: User */}
          <div className="absolute inset-[10%]">
            <CircularProgressbar
              value={userPercentage}
              text={''}
              strokeWidth={6}
              styles={buildStyles({
                pathColor: userColor,
                trailColor: '#e5e7eb',
              })}
            />
          </div>
          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={headingStyles}>{heading}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <div className="flex gap-[8px] justify-center">
          <span
            className="w-[24px] h-[24px] rounded-[6px] text-white flex justify-center items-center text-[12px] font-semibold leading-[16px]"
            style={{ backgroundColor: competitorColor }}
          >
            {competitorPercentage}
          </span>
          <DashboardSubHeading subheading={`Competitor ${heading} Score`} />
        </div>
        <div className="flex gap-[8px] justify-center">
          <span
            className="w-[24px] h-[24px] rounded-[6px] text-white flex justify-center items-center text-[12px] font-semibold leading-[16px]"
            style={{ backgroundColor: userColor }}
          >
            {userPercentage}
          </span>
          <DashboardSubHeading subheading={`Your ${heading} Score`} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCompetitorComparisonGraph;
