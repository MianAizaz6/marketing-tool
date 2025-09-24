import { Sparkles, type LucideIcon } from 'lucide-react';

const TextAreaComponent = ({
  Icon,
  label,
  placeholder,
  rows = 4,
  aiSuggestion = false,
}: {
  Icon: LucideIcon;
  label: string;
  placeholder: string;
  rows?: number;
  aiSuggestion?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Icon className="w-4 h-4 text-gray-600" />
          <label className="text-[#364153] text-[14px] font-medium capitalize">{label}</label>
        </div>
        {aiSuggestion && (
          <button className="flex w-fit items-center gap-1 px-3 py-1 text-xs bg-orange-100 hover:bg-[#FF4400] hover:text-white text-[#FF4400] rounded-full  transition-colors disabled:opacity-50">
            <Sparkles className="w-3 h-3" />
            AI Suggest
          </button>
        )}
      </div>
      <textarea
        placeholder={placeholder}
        rows={rows}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4400] focus:border-transparent transition-all"
      />
    </div>
  );
};

export default TextAreaComponent;
