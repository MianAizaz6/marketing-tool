import { IconBoxProps } from '../../../static-data';

const IconBox = ({ icon, heading, paragraph, callToAction }: IconBoxProps) => {
  return (
    <div className="flex justify-start items-start gap-[20px]">
      <div className="w-[44px] h-[44px] flex justify-center items-center border border-[#0F172A] rounded-[6px]">
        <img className="w-[30px] h-[24px]" src={icon} alt="" />
      </div>
      <div className="flex flex-col gap-[16px]">
        <h3 className="font-semibold text-[16px] leading-[24px] text-[#333333]">{heading}</h3>
        <p className="font-normal text-[16px] leading-[22px] text-[#666666]">{paragraph}</p>
        <p className="font-semibold text-[18px] leading-[100%] text-[#0F172A]">{callToAction}</p>
      </div>
    </div>
  );
};

export default IconBox;
