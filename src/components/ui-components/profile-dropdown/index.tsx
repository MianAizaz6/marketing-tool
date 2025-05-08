import React from 'react';
import NavDropdown from '../nav-drop-down';
import { arrowDown, loginUser } from '../../../static-img-url';

interface ProfileDropDownProps {
  toggle: (open: boolean) => void;
  open: boolean;
  logout: () => void;
}

const ProfileDropDown: React.FC<ProfileDropDownProps> = ({ toggle, open, logout }) => {
  return (
    <div>
      <span className="relative z-20">
        <button
          className="border-[1px] bg-white text-left border-border-primary inline-block py-[7px] px-[12px] rounded-[5px] cursor-pointer"
          onClick={() => toggle(!open)}
          type="button"
        >
          <span className="block leading-[0px]">
            <span className="relative inline-block w-[26px] h-[26px] mr-[10px] overflow-hidden rounded-[50%]">
              <img
                alt="Icon"
                className="object-cover"
                sizes="24px"
                src={loginUser}
              />
            </span>

            <span className="relative -top-[3px] inline-block w-[12px] h-[16px]">
              <img
                alt="Icon"
                sizes="12px"
                src={arrowDown}
              />
            </span>
          </span>
        </button>
        <NavDropdown
          isOpen={open}
          toggle={toggle}
          logout={logout}
        />
      </span>
    </div>
  );
};

export default ProfileDropDown;
