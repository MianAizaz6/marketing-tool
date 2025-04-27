import LogoSlider from './logo-slider';

const ContactCompanySlider = () => {
  return (
    <div className="flex flex-col gap-[24px] items-center py-[60px] bg-[#F8F8F8] overflow-x-hidden">
      <h3 className="text-[36px] text-center font-bold uppercase text-[#0F172A] leading-[100%]">
        <span className="text-[#FF4400]">Join Us</span> on the Journey
      </h3>
      <LogoSlider />
    </div>
  );
};

export default ContactCompanySlider;
