import Select, { components } from 'react-select';
import { arrow } from '../../../static-img-urls';



const DropdownIndicator = (props) => components.DropdownIndicator && (
  <components.DropdownIndicator {...props}>
    <div className="relative w-[10px] h-[10px] mr-[5px]">
      <img
        alt="Arrow Down"
        className={`text-text-secondary ${props.selectProps.menuIsOpen && '-rotate-180'} invert transition ease-in-out duration-300`}
        priority
        src={arrow}
      />
    </div>
  </components.DropdownIndicator>
);

const SelectBox = (props) => {
  const { placeholder, label, name, onChange, value, options, validation, classes, disabled, validationMessage, isLoading, isMulti } = props;
  let { style } = props;

  style = {
    bg: '#fff',
    border: '1px',
    br: '5px',
    height: '44px',
    menuWidth: '100%',
    width: '100%',
    ...style,
  };

  const styling = {
    control: (base, state) => ({
      ...base,
      '&:focus': {
        border: `${style.border} solid #3a3a3a !important`,
      },
      '&:hover': {
        border: `${style.border} solid #3a3a3a !important`,
      },
      backgroundColor: style.bg,
      border: `${style.border} solid ${state.isFocused ? '#3a3a3a' : '#f3f3f3'}`,
      borderColor: '#D0D5DD',
      borderRadius: style.br,
      boxShadow: `0 0 0px  ${state.isFocused ? '0px' : '0px'} #0586ff0f !important`,
      color: '#888888',
      fontSize: '12px',
      height: isMulti ? 'content-fit' : style.height,
      // overflow: isMulti ? 'scroll' : '',
      width: style.width,
    }),
    menu: (base) => ({
      ...base,
      width: style.menuWidth,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#F9FAFB' : undefined,
      color: state.isSelected ? '#2a2a2a' : undefined,
    }),
  };


  return (
    <div>
      {label && <label className="text-[#2a2a2a] text-[14px]  mb-[5px] block">{label}</label>}
      <Select
        className={`${classes || ''} font-regular text-[12px]`}
        components={{
          DropdownIndicator,
          IndicatorSeparator: () => undefined,
        }}
        instanceId={name}
        isDisabled={disabled}
        isLoading={isLoading}
        isMulti={isMulti}
        name={name}
        onChange={(e) => onChange(name, e)}
        options={options}
        placeholder={placeholder}
        styles={styling}
        value={value}
      />

      {validation ? <p className="text-[10px] text-[#F04438] mb-0 mt-[5px]">{validationMessage || 'Required Field'}</p> : ''}

    </div>
  );
};

export default SelectBox;
