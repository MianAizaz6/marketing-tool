import React from 'react';
import { ImprovmentSuggestionCardProps } from '../../../static-data';
import { getColor } from '../../../utils/utilityFunctions';

const ImprovmentSuggestionCard: React.FC<ImprovmentSuggestionCardProps> = ({
  level,
  numberOfImprovements,
}) => {
  return (
    <div className="w-[350px] bg-white rounded-[4px] p-[12px] flex gap-[8px] items-center">
      <div
        className={`w-[24px] h-[24px] rounded-[4px] p-[4px] ${getColor(level)} flex justify-center items-center font-semibold text-[14px] leading-[16px] text-white`}
      >
        {numberOfImprovements}
      </div>
      <span className="text-[#333333] text-[14px] leading-[16px] font-medium">
        {level} Priority
      </span>
    </div>
  );
};

export default ImprovmentSuggestionCard;
