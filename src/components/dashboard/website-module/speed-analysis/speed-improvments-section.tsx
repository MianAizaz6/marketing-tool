import { useState, FC } from 'react';
import DashboardCard from '../../../ui-components/dashboard/dashboard-card';
import DashboardHeading from '../../../ui-components/dashboard/dashboard-heading';
import ImprovmentSuggestionCard from '../../../ui-components/dashboard/improvment-suggestion-card';
import ImprovmentSuggestionText from '../../../ui-components/dashboard/improvment-suggestion-text';

type PriorityLevel = 'high' | 'medium' | 'low';

interface SuggestionData {
  high: string[];
  medium: string[];
  low: string[];
  unknown?: string[];
}

interface SpeedImprovementsSectionProps {
  suggestionData: SuggestionData;
}

const SpeedImprovementsSection: FC<SpeedImprovementsSectionProps> = ({
  suggestionData,
}) => {
  const [active, setActive] = useState<PriorityLevel>('high'); // ✅ strictly typed

  const priorityLevels: PriorityLevel[] = ['high', 'medium', 'low'];

  if (!suggestionData || !suggestionData[active]) return null;

  return (
    <DashboardCard className="flex flex-col gap-[16px]">
      <DashboardHeading heading="Suggestions for Improvements" />
      <div className="flex gap-[24px]">
        <div className="flex flex-col gap-[12px]">
          {priorityLevels.map((level) => (
            <ImprovmentSuggestionCard
              key={level}
              level={level}
              numberOfImprovements={suggestionData[level]?.length ?? 0}
              onClick={() => setActive(level)}
              isActive={active === level}
            />
          ))}
        </div>

        <div className="flex flex-col gap-[12px]">
          {suggestionData[active]?.length ? (
            suggestionData[active].map((item, index) => (
              <ImprovmentSuggestionText
                key={index}
                improvmentText={item}
                level={active}
              />
            ))
          ) : (
            <div className="text-sm text-[#fb7949] w-2xl italic bg-white rounded-md h-[180px] flex justify-center items-center">
              No improvements in {active} priority.
            </div>
          )}
        </div>
      </div>
    </DashboardCard>
  );
};

export default SpeedImprovementsSection;
