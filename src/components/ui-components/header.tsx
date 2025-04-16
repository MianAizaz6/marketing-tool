import React from 'react'
import staticData from '../../static-data'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md">
      <h1 className="text-2xl font-bold text-[#FF4A4A]">IPSUM</h1>
      <nav className="hidden md:flex gap-6 text-sm">
        {staticData.navItems.map((item, idx) => {
          return (
            <Link className='text-[#0F172A] text-[14px] font-medium' to={item.link} key={idx}>{item.label}</Link>
          )
        })}
      </nav>
      <div className="flex gap-3">
        <button className="text-sm border px-4 py-2 rounded">Log in</button>
        <button className="text-sm bg-[#1D1D1F] text-white px-4 py-2 rounded">
          Try our product
        </button>
      </div>
    </header>
  )
}

export default Header
