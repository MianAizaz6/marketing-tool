import React, { useState } from 'react'
import InputField from './index'
import { hide, show } from '../../../../static-img-urls'


const PasswordInput = ({ label, name, placeholder, value, onChange }) => {

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className='relative'>
      <InputField
        label={label}
        type={showPassword ? 'text' : 'password'}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        // validation={validation && !title}
        value={value}
      />

      <div className=' absolute top-[37px] right-[15px]'><span className='relative inline-block h-[20px] cursor-pointer w-[20px]' onClick={() => handleShowPassword()} > <img alt='icon' src={showPassword ? hide : show} /> </span> </div>
    </div>
  )
}

export default PasswordInput
