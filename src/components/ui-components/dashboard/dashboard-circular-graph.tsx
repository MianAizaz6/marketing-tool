import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type StatCircleProps = {
  percentage: number;
  heading: string;
  color?: string;
  size?: string;
  headingStyles: string;
  containerstyles?: string;
};

const DashboardCircularGraph = ({
  percentage,
  heading,
  color = '#3b82f6', // Default Tailwind blue
  size = '100px',
  headingStyles,
  containerstyles,
}: StatCircleProps) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-2 ${containerstyles}`}
      style={{ width: size, height: size }}
    >
      <div className="relative w-full h-full">
        <CircularProgressbar
          value={percentage}
          text={''}
          styles={buildStyles({
            pathColor: color,
            textColor: '#111827',
            trailColor: '#F5F5F5',
            textSize: '16px',
          })}
        />
        {/* Custom text layer */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={headingStyles}>{heading}</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardCircularGraph;
