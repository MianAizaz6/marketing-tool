import type { LucideIcon } from 'lucide-react';

const SelectComponent = ({
  Icon,
  label,
  options,
}: {
  Icon: LucideIcon;
  label: string;
  options: string[];
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <Icon className="w-4 h-4 text-gray-600" />
        <label className="text-[#364153] text-[14px] font-medium">{label}</label>
      </div>
      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#FF4400] focus:border-transparent transition-all">
        <option value="">Select a category</option>
        {options.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
