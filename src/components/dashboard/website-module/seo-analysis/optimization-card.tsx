import React from 'react';
import DashboardCard from '../../../ui-components/dashboard/dashboard-card';

interface OptimizationItem {
  keyword: string;
  value: number;
}

interface OptimizationCardProps {
  listData: OptimizationItem[];
  heading: string,
  subHead: string
  tableHeadings: string[]
}

const OptimizationCard: React.FC<OptimizationCardProps> = ({ listData, heading, subHead, tableHeadings }) => {
  return (
    <div className="bg-white rounded-md border-gray-200 p-6 w-full">
      <h3 className="text-sm font-medium text-gray-900 mb-1">{heading}</h3>
      <p className="text-xs text-gray-500 mb-4">
        {subHead}
      </p>

      <DashboardCard>
        <table className="w-full text-sm text-left text-gray-700">
          <thead>
            <tr className="text-gray-500 text-xs">
              <th scope="col" className="py-2 font-medium">
                {tableHeadings[0]}
              </th>
              <th scope="col" className="py-2 text-right font-medium">
                {tableHeadings[1]}
              </th>
            </tr>
          </thead>
          <tbody>
            {listData.map(({ keyword, value }) => (
              <tr key={keyword}>
                <td className="py-2 text-gray-900">{keyword}</td>
                <td className="py-2 text-right font-semibold text-gray-800">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </DashboardCard>
    </div>
  );
};

export default OptimizationCard;
