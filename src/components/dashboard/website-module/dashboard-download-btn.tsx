import { downloadIcon, emailIcon2 } from '../../../static-img-url';

const DashboardDownloadBtn = () => {
  return (
    <div className="flex gap-[16px] items-center">
      <div className="flex items-center gap-[8px] cursor-pointer">
        <div className="w-[22px] h-[22px] rounded-[4px] flex items-center justify-center bg-[#F8F8F8]">
          <img src={downloadIcon} alt="download-report" />
        </div>
        <h3 className="text-[14px] leading-[14px] font-medium text-[#333333]">Download</h3>
      </div>
      <hr className="w-[1px] h-[22px] bg-[#E2E8F0]" />
      <div className="flex items-center gap-[8px] cursor-pointer">
        <div className="w-[22px] h-[22px] rounded-[4px] flex items-center justify-center bg-[#F8F8F8]">
          <img src={emailIcon2} alt="download-report" />
        </div>
        <h3 className="text-[14px] leading-[14px] font-medium text-[#333333]">Email</h3>
      </div>
    </div>
  );
};

export default DashboardDownloadBtn;
