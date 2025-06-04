import React from 'react';
import { ImprovmentSuggestionTextProps } from '../../../static-data';
import { getColor } from '../../../utils/utilityFunctions';

const ImprovmentSuggestionText: React.FC<ImprovmentSuggestionTextProps> = ({
  level,
  improvmentText,
}) => {
  return (
    <div className="w-full bg-white relative rounded-[4px] p-[12px] flex gap-[8px] items-center overflow-hidden">
      <span className={`absolute top-0 left-0 ${getColor(level)} w-[4px] h-full`}></span>
      <p className="text-[14px] leading-[20px] text-[#0F172A]">{improvmentText}</p>
    </div>
  );
};

export default ImprovmentSuggestionText;
