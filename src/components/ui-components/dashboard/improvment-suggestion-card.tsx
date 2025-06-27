import React from 'react';
import { ImprovmentSuggestionCardProps } from '../../../static-data';
import { getColor } from '../../../utils/utilityFunctions';

const ImprovmentSuggestionCard: React.FC<ImprovmentSuggestionCardProps> = ({
  level,
  numberOfImprovements,
  onClick,
  isActive
}) => {
  return (
    <div className={`${isActive ? 'border-[1px] border-[#f46b399f]' : ''} w-[350px] cursor-pointer bg-white rounded-[4px] p-[12px] flex gap-[8px] items-center`} onClick={onClick}>
      <div
        className={`w-[24px] h-[24px] rounded-[4px] p-[4px] ${getColor(level.charAt(0).toUpperCase() + level.slice(1))} flex justify-center items-center font-semibold text-[14px] leading-[16px] text-white`}
      >
        {numberOfImprovements}
      </div>
      <span className="text-[#333333] text-[14px] leading-[16px] font-medium">
        {level.charAt(0).toUpperCase() + level.slice(1)}
      </span>
    </div>
  );
};

export default ImprovmentSuggestionCard;
