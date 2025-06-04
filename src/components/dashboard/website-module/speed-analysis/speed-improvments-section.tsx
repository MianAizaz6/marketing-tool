import { useState } from 'react';
import {
  improvementsSuggestionsData,
  improvementsSuggestionTextData,
  speedMetricsOptions,
} from '../../../../static-data';
import DashboardCard from '../../../ui-components/dashboard/dashboard-card';
import DashboardHeading from '../../../ui-components/dashboard/dashboard-heading';
import ImprovmentSuggestionCard from '../../../ui-components/dashboard/improvment-suggestion-card';
import ImprovmentSuggestionText from '../../../ui-components/dashboard/improvment-suggestion-text';

const SpeedImprovmentsSection = () => {
  const [active, setActive] = useState(speedMetricsOptions[0]);
  return (
    <DashboardCard className="flex flex-col gap-[16px]">
      <DashboardHeading heading="Suggestions for Improvements" />
      <div className="flex gap-[24px]">
        <div className="flex flex-col gap-[12px]">
          {improvementsSuggestionsData.map(item => (
            <ImprovmentSuggestionCard
              key={item.level}
              level={item.level}
              numberOfImprovements={item.numberOfImprovements}
            />
          ))}
        </div>
        <div className="flex flex-col gap-[12px]">
          <div className="flex ie rounded-[6px] bg-white">
            {speedMetricsOptions.map(item => (
              <h3
                className={`px-[12px] cursor-pointer text-[14px] font-medium ${active === item ? 'border-[#0F172A] text-[#0F172A]' : 'border-[#E2E8F0] text-[#666666]'} leading-[32px] border-2 first:rounded-tl-[6px] first:rounded-bl-[6px] last:rounded-tr-[6px] last:rounded-br-[6px]  `}
                key={item}
                onClick={() => setActive(item)}
              >
                {item}
              </h3>
            ))}
          </div>
          <div className="flex flex-col gap-[12px]">
            {improvementsSuggestionTextData.map(item => (
              <ImprovmentSuggestionText
                key={item.improvmentText}
                improvmentText={item.improvmentText}
                level={item.level}
              />
            ))}
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default SpeedImprovmentsSection;
