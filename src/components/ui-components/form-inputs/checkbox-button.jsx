
// import { tickIcon } from '@/static/static-img-urls';

const CheckBocButton = ({ onClick, checked }) =>
  <div>
    <button className={`border rounded-[2px] flex w-[16px] h-[16px] items-center justify-center cursor-pointer ${checked ? 'bg-[#0586ff14] border-border-secondary' : 'bg-[#f5f5f5]'}`} onClick={() => onClick()} type="button">
      {
        checked ?
          <span className="relative inline-block mx-auto w-[10px] h-[10px]">
            <img alt="Reviewer Image" sizes="50" src={''} />
          </span>
          : undefined
      }
    </button>
  </div>;

export default CheckBocButton;
