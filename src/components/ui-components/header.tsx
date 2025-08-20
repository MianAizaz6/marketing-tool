import React, { useState } from 'react'
import staticData from '../../static-data'
import { Link, useNavigate } from 'react-router-dom'
import ProfileDropDown from './profile-dropdown';

const Header = () => {
  const [open, setOpen] = useState(false);

  const accessToken = localStorage.getItem('accessToken');
  const isLoggedIn = accessToken && accessToken !== null;
  const navigate = useNavigate();

  const toggle = (state: boolean | ((prevState: boolean) => boolean)) => {
    setOpen(state);
  }

  const logout = () => {
    localStorage.removeItem("accessToken");
    navigate('/');
  }

  return (
    <header className="flex justify-between items-center  px-6 py-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-[#FF4A4A]">IPSUM</h1>
      <nav className="hidden md:flex gap-6 text-sm">
        {staticData.navItems.map((item, idx) => {
          return (
            <Link className='text-[#0F172A] text-[14px] font-medium' to={item.link} key={idx}>{item.label}</Link>
          )
        })}
      </nav>
      {
        isLoggedIn ? <div className='pr-5'> <ProfileDropDown toggle={toggle} open={open} logout={logout} /></div> : <div className="flex gap-3">
          <Link to={'/sign-in'} className="text-sm border px-4 py-2 rounded">Log in</Link>
          <button className="text-sm bg-[#1D1D1F] text-white px-4 py-2 rounded">
            Try our product
          </button>
        </div>
      }

    </header>
  )
}

export default Header
