import React from 'react'

export const CustomInput = ({errors, ...props}) => {

  return (
    <div className='w-full'>
      <input 
        className={`w-full border-b-1  pb-4 px-3.5 focus:outline-none focus:border-secondary-100 ${errors ? 'border-contrast text-contrast focus:text-white' : 'border-white'} `}
        {...props}
      />
      {errors && <span className='italic text-[10px] text-contrast px-3.5'>{errors.message}</span>}
    </div>
    
  )
}
