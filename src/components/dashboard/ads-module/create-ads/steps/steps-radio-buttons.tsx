import type { LucideIcon } from 'lucide-react';

const StepsRadioButtons = ({
  options,
  selectedOption,
  Icon,
  label,
  setSelectedOption,
}: {
  options: {
    value: string;
    label: string;
    description?: string;
    icon?: LucideIcon;
  }[];
  selectedOption: string | null;
  Icon: LucideIcon;
  label: string;
  setSelectedOption: (option: string | null) => void;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <Icon className="w-4 h-4 text-gray-600" />
        <label className="text-[#364153] text-[14px] font-medium capitalize">{label}</label>
      </div>
      <div className="flex gap-3">
        {options.map(option => (
          <div
            onClick={() => setSelectedOption(option.value)}
            key={option.value}
            className={`px-4 flex gap-2 items-center flex-nowrap min-w-fit cursor-pointer py-2 border ${selectedOption === option.value ? 'bg-[#FF4400] text-white' : 'hover:bg-gray-100'} border-gray-300 rounded-lg text-gray-700  `}
          >
            {option.icon && (
              <option.icon
                className={`w-4 h-4 inline-block ${selectedOption === option.value ? 'text-white' : 'text-gray-600'} `}
              />
            )}
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsRadioButtons;
