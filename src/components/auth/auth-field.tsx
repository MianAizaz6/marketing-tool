import { InputHTMLAttributes, forwardRef } from 'react';

interface AuthFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const AuthField = forwardRef<HTMLInputElement, AuthFieldProps>(({ label, error, ...rest }, ref) => {
  return (
    <div className="flex flex-col gap-[6px]">
      <label className="text-[14px] leading-[20px] text-[#0F172A] font-medium">{label}</label>
      <input
        className="border border-[#CBD5E1] rounded-[6px] h-[44px] p-[12px] placeholder:text-[#666666] text-[14px] leading-[20px] text-[#0F172A] placeholder:font-normal font-medium"
        ref={ref}
        {...rest}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
});

export default AuthField;
