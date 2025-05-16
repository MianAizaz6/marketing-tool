import React, { ReactNode, ChangeEvent } from 'react';

interface InputFieldProps {
  placeholder?: string;
  label?: string;
  name: string;
  subLabel?: string;
  onChange: (name: string, value: string) => void;
  value: string | number | null;
  className?: string;
  type?: string;
  validation?: boolean;
  validationMessage?: string;
  children?: ReactNode;
  maxLength?: number;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  pattern?: string;
  max?: number | string;
  min?: number | string;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const {
    placeholder,
    label,
    name,
    subLabel,
    onChange,
    value,
    className,
    type = 'text',
    validation,
    validationMessage,
    children,
    maxLength,
    inputMode,
    pattern,
    max,
    min,
    disabled,
  } = props;

  return (
    <div>
      {label && (
        <label className="text-[#2a2a2a] font-[400] text-[14px] mb-[8px] block">
          {label}
        </label>
      )}
      {subLabel && (
        <p className="text-[11px] text-[#6E6E80] font-light mb-2">{subLabel}</p>
      )}
      <div className="relative">
        <input
          className={`${className || ''} autofill:bg-transparent pr-[5px] h-[46px] font-regular text-[14px] placeholder:font-light placeholder:text-[12px] placeholder:text-[#888] text-[#2a2a2a] border-[#CBD5E1] border-[1px] transition-all pl-[15px] shadow-[0_2px_3px_1px_rgba(0,0,0,0.01)] rounded-[8px] w-full py-[10.5px] outline-0 ${!disabled ? 'focus-visible:border-[#FF4400] hover:border-[#FF4400]' : 'cursor-not-allowed'
            }`}
          disabled={disabled}
          inputMode={inputMode}
          max={max}
          maxLength={maxLength}
          min={min}
          name={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(name, e.target.value)
          }
          pattern={pattern}
          placeholder={placeholder}
          type={type}
          value={value === null ? '' : value}
        />
        {children}
      </div>

      {validation && (
        <p className="text-[10px] text-[#F04438] mb-0 mt-[5px]">
          {validationMessage || 'Required Field'}
        </p>
      )}
    </div>
  );
};

export default InputField;
