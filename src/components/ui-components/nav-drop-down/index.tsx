import React from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../../../static-img-url';
import { useQuery } from '@tanstack/react-query';
import { getWorkSpaceList } from '../../../apis/onboarding';


interface NavDropdownProps {
  isOpen: boolean;
  toggle: (open: boolean) => void;
  logout: () => void;
}

interface UserInfo {
  name: string;
  email: string;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ isOpen, toggle, logout }) => {
  const info: UserInfo = { name: 'User', email: 'user@gmail.com' };


  const storedUserInfo = localStorage.getItem('userInfo');
  const userId = storedUserInfo ? JSON.parse(storedUserInfo).id : null;

  const workSpaceListQuery = useQuery({
    queryKey: ["workspace-list"],
    queryFn: async () => {
      const data = await getWorkSpaceList(`?userId=${userId}`);
      return data
    }
  });

  const isFirstTime = workSpaceListQuery?.data?.items?.length < 1;


  return (
    <div
      className={`drop ${isOpen ? 'block' : 'hidden'} absolute right-0 z-[9999] top-[calc(100%+8px)] bg-white rounded-[8px] border border-border-primary w-[240px] shadow-lg`}
    >
      {/* Dropdown Header */}
      <Link to="/user-account" onClick={() => toggle(false)}>
        <div className="px-4 py-3 border-b border-gray-200 flex items-center">
          <img
            src={loginUser}
            alt="User Avatar"
            className="w-8 h-8 rounded-full mr-3"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">{info.name}</p>
            <p className="text-xs text-gray-500">{info.email}</p>
          </div>
        </div>
      </Link>

      {/* Dropdown Items */}
      <ul className="py-2">
        <li>
          <Link
            to={`${isFirstTime ? '/onboarding-info' : '/dashboard'}`}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => toggle(false)}
          >
            Dashboard
          </Link>
        </li>

        <li>
          <button
            onClick={() => { logout(); toggle(false); }}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavDropdown;
