import { Sparkles, Upload, Image as ImageIcon, type LucideIcon } from 'lucide-react';
import { useRef } from 'react';

const FileUploadComponent = ({
  Icon = ImageIcon,
  label,
  accept = 'image/*',
  multiple = false,
  aiSuggestion = false,
  onChange,
}: {
  Icon?: LucideIcon;
  label: string;
  accept?: string;
  multiple?: boolean;
  aiSuggestion?: boolean;
  onChange?: (files: FileList | null) => void;
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col gap-2 grow">
      {/* Label + AI Suggest */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Icon className="w-4 h-4 text-gray-600" />
          <label className="text-[#364153] text-[14px] font-medium capitalize">{label}</label>
        </div>
        {aiSuggestion && (
          <button
            type="button"
            className="flex w-fit items-center gap-1 px-3 py-1 text-xs bg-orange-100 hover:bg-[#FF4400] hover:text-white text-[#FF4400] rounded-full  transition-colors disabled:opacity-50"
          >
            <Sparkles className="w-3 h-3" />
            AI Suggest
          </button>
        )}
      </div>

      {/* Upload Box */}
      <div
        onClick={handleFileSelect}
        className="w-full grow flex flex-col items-center justify-center gap-2 px-4 py-8 border border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#FF4400] hover:bg-orange-50 transition-all"
      >
        <Upload className="w-6 h-6 text-gray-500" />
        <p className="text-sm text-gray-600">
          Click to upload {multiple ? 'files' : 'a file'} or drag and drop
        </p>
        <p className="text-xs text-gray-400">Supported: {accept}</p>
      </div>

      {/* Hidden Input */}
      <input
        type="file"
        accept={accept}
        multiple={multiple}
        ref={fileInputRef}
        onChange={e => onChange?.(e.target.files)}
        className="hidden"
      />
    </div>
  );
};

export default FileUploadComponent;
