// components/MetaTestCard.tsx
import React from 'react';
import { tickCircle, warningCircle } from '../../../../static-img-url';

export interface MetaTestResult {
  label: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
  text: string;
  length: number;
}

interface Props {
  data: MetaTestResult[];
}

const MetaTestCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full space-y-6">
      {data.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row items-start  justify-between bg-white p-4 rounded-md shadow "
        >
          <div className="flex items-start md:items-center gap-2">
            <div className="text-green-500 text-lg mt-0.5"><img src={item.status === 'pass' ? tickCircle : warningCircle} alt="" /></div>
            <div className="font-semibold text-sm text-gray-800">{item.label}</div>
          </div>

          <div className='flex flex-col gap-2 w-[75%]'>
            <div className="mt-2 md:mt-0 text-sm text-gray-700">{item.message}</div>
            <div className="mt-2 md:mt-0 w-full md:w-auto relative bg-[#F8F8F8] p-3 rounded-md text-sm text-gray-800">
              <span className={`absolute top-0 left-0 bg-green-500 w-[4px] rounded-md h-full`}></span>
              <div>
                <span className="font-medium">Text:</span> {item.text}
              </div>
              <div>
                <span className="font-medium">Length:</span> {item.length} characters
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetaTestCard;
