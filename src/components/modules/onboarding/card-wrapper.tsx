import React, { ReactNode } from 'react'

type wrapperProps = {
  children: ReactNode,
  title: string,
  desc: string
}

const CardWrapper: React.FC<wrapperProps> = ({ children, title, desc }) => {
  return (
    <div className="w-full max-w-xl bg-[#f8f8f8] border-[4px] border-[#FFFFFF] rounded-xl shadow-md p-8">

      <h2 className="text-center text-lg font-semibold mb-2">{title}</h2>
      <p className="text-center text-sm text-gray-600 mb-6">
        {desc}
      </p>

      {children}
    </div>
  )
}

export default CardWrapper
