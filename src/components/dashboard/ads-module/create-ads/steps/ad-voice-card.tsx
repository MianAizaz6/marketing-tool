import { AdVoice, AdVoiceOptionsType } from '../../../../../static-data';

const AdVoiceCard = ({
  option,
  selectedStyle,
  setSelectedStyle,
}: {
  option: AdVoiceOptionsType;
  selectedStyle: AdVoice | null;
  setSelectedStyle: (style: AdVoice) => void;
}) => {
  const Icon = option.icon;
  const isSelected = selectedStyle === option.id;

  return (
    <div
      key={option.id}
      onClick={() => setSelectedStyle(option.id)}
      className={`cursor-pointer rounded-2xl border p-4 shadow-sm transition hover:shadow-md w-full
        ${
          isSelected
            ? 'border-[#FF4400] bg-[#FFF4F0] shadow-md'
            : 'border-gray-200 bg-white hover:border-[#FF4400] hover:shadow-md hover:scale-[1.02]'
        }`}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-gray-600" />
        <h3 className="font-medium text-base">{option.title}</h3>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 mt-1">{option.description}</p>

      {/* Example Section */}
      <div className="mt-4">
        <p className="text-xs uppercase font-semibold text-gray-400 mb-2">{`Example of a ${option.title} tone`}</p>
        <div
          className={`rounded-md border text-sm p-3 leading-snug ${
            isSelected
              ? 'bg-[#EC4002] text-white border-[#EC4002]'
              : 'bg-gray-50 text-gray-700 border-gray-200'
          }`}
        >
          “{option.example}”
        </div>
      </div>
    </div>
  );
};

export default AdVoiceCard;
