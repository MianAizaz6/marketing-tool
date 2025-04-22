import { googleImage } from '../../static-img-url';

type GoogleAuthBtnProps = {
  text: string;
  onClick: () => void;
};

const GoogleAuthBtn = ({ text, onClick }: GoogleAuthBtnProps) => {
  return (
    <div
      onClick={() => onClick()}
      className="h-[48px] cursor-pointer border border-[#0F172A] rounded-[6px] w-full px-[24px] flex items-center gap-[20px]"
    >
      <img src={googleImage} alt="" className="w-[23px] h-[23px]" />
      <p className="text-[18px] text-[#1D1C2B] font-medium leading-[136%]">{text}</p>
    </div>
  );
};

export default GoogleAuthBtn;
