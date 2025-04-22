interface AuthButtonprops {
  disabled?: boolean; // Make `disabled` optional
  type: 'button' | 'submit' | 'reset';
  text: string;
}

const AuthButton = ({ disabled = false, type, text }: AuthButtonprops) => {
  return (
    <button
      className="disabled:bg-[#0F172A80] bg-[#FF4400] px-[16px] py-[12px] h-[40px] w-full rounded-[6px] flex items-center justify-center text-white text-[14px] leading-[24px] font-medium cursor-pointer disabled:cursor-not-allowed"
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default AuthButton;
