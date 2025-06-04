import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import DashboardHeading from './dashboard-heading';
import { metricsComparisonDataProps } from '../../../static-data';

type Props = {
  data: metricsComparisonDataProps[];
};

const DashboardCompetitorGraph = ({ data }: Props) => {
  const unitFormatter = (
    value: number,
    _index: number,
    props?: { payload?: metricsComparisonDataProps }
  ) => {
    return `${value}${props?.payload?.unit ?? ''}`;
  };

  return (
    <div className="w-full flex flex-col gap-[12px] bg-white p-4 rounded-lg shadow-sm">
      <DashboardHeading heading="Metrics Comparison" />
      <ResponsiveContainer width="100%" height={360}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 10, right: 30, left: 60, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="metric" />
          <Tooltip
            formatter={(value: number, _name, props) =>
              `${value}${(props?.payload as metricsComparisonDataProps)?.unit ?? ''}`
            }
          />
          <Legend
            wrapperStyle={{
              paddingTop: 10,
            }}
          />
          <Bar dataKey="you" fill="#FF4400" name="You">
            <LabelList dataKey="you" position="right" formatter={unitFormatter} />
          </Bar>
          <Bar dataKey="competitor" fill="#0F172A" name="Competitor">
            <LabelList dataKey="competitor" position="right" formatter={unitFormatter} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardCompetitorGraph;
