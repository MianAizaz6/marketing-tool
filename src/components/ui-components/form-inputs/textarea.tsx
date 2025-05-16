
const Textarea = (props) => {
  const { placeholder, label, name, onChange, onKeyDown, value, classes, rows, children, validation, validationMessage, maxLength } = props;

  return (

    <div>
      {label && <label className="text-[#2a2a2a] text-[14px] mb-[5px] block">{label}</label>}
      <div className="relative">
        <textarea
          className={`${classes || ''} prevent-select placeholder:font-light placeholder:text-[12px]  autofill:bg-transparent font-regular text-[14px] placeholder:text-[#888] text-[#2a2a2a] border-[#CBD5E1] border-[1px] transition-all pl-[15px] shadow-[0_2px_3px_1px_rgba(0,0,0,0.01)] rounded-[6px] w-full py-[10.5px] outline-0 focus-visible:border-[#FF4400] hover:border-[#FF4400] focus-visible:shadow-[0_0_1px_4px_#0586ff0f]`}
          maxLength={maxLength}
          name={name}
          onChange={(e) => onChange(name, e.target.value)}
          onKeyDown={(e) => onKeyDown && onKeyDown(e)}
          placeholder={placeholder}
          rows={rows || '4'}
          value={value}
        />
        {children}
      </div>

      {validation ? <p className="text-[10px] text-[#F04438] mb-0 mt-[5px]">{validationMessage || 'Required Field'}</p> : ''}
    </div>
  );
};

export default Textarea;
