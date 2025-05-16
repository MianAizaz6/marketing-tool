import React from "react";
import { uploadIcon } from "../../../static-img-url";

interface FileInputProps {
  buttonLabel: string;
  label?: string;
  multi?: boolean;
  onChange: (name: string, files: FileList | null, index?: number) => void;
  name: string;
  index?: number;
  value: File[];
  validation?: boolean;
  validationMessage?: string;
}

const FileInput: React.FC<FileInputProps> = ({
  buttonLabel,
  label,
  multi = false,
  onChange,
  name,
  index,
  value,
  validation,
  validationMessage,
}) => (
  <div>
    {label && (
      <label className="text-text-primary text-[14px] mb-[5px] block">{label}</label>
    )}

    <div className="relative cursor-pointer">
      {/* File Input */}
      <input
        className="block w-full cursor-pointer absolute inset-0 z-[2] opacity-0"
        multiple={multi}
        name={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(name, e.target.files, index)
        }
        type="file"
      />

      {/* Display Button */}
      {/* <button
        className="relative z-[1] bg-white py-[10.5px] block w-full pl-[56px] text-[14px] rounded-[6px] border-[1px] border-border-primary text-text-secondary overflow-hidden"
        type="button"
      >
        <span className="inline-grid items-center justify-center absolute left-0 top-0 bottom-0 w-[46px] border-r-[1px] border-border-primary bg-[#f5f5f5]">
          <span className="inline-block relative h-[11.67px] w-[11.67px]">
            <p>+</p>
          </span>
        </span>
        {value.length <= 0 ? (
          buttonLabel
        ) : (
          <span className="text-[12px]">{value[0]?.name}</span>
        )}
      </button> */}

      <div className="w-full border-1 border-[#CBD5E1] rounded-md flex flex-col items-center justify-center py-6 text-center text-sm text-gray-500 cursor-pointer hover:border-orange-400 transition">
        <img src={uploadIcon} alt="" />
        <span>
          <span className="font-medium text-orange-500">Click to upload</span> or drag and drop
        </span>
        <p className="text-xs text-gray-400 mt-1">
          SVG, PNG, JPG or GIF (max. 800x400px)
        </p>
      </div>
    </div>

    {validation && (
      <p className="text-[10px] text-[#F04438] mb-0 mt-[5px]">
        {validationMessage || "Required Field"}
      </p>
    )}
  </div>
);

export default FileInput;
