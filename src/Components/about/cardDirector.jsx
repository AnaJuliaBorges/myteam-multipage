'use client'

import Image from 'next/image'
import { useState } from 'react'

import linkedInIcon from '@/assets/icon-linkedin.svg'
import X from '@/assets/icon-twitter.svg'

import close from '@/assets/icon-close.svg'
import cross from '@/assets/icon-cross.svg'

import { RoundedImage } from '../roundedImage'

export const CardDirector = ({name, role, image, description, x, linkedIn}) => {
  const [openCard, setOpenCard] = useState(false)

  const handleClick = () => setOpenCard(prev => !prev)

  return (
    <div className=' relative w-[350px] flex flex-col items-center justify-center bg-secondary-500 pt-8 pb-14 px-8'>
      
      {!openCard && (
        <div className='flex flex-col gap-4 items-center'>
          <RoundedImage name={name} image={image} size={96}/>
          <div>
            <p className='text-secondary-100 text-body1 font-bold'>{name}</p>
            <p className='text-body2 italic'>{role}</p>
          </div>
        </div> 
      )}

      {openCard && (
        <div className='flex flex-col'>
          <p className='text-secondary-100 text-body1 font-bold mb-2'>{name}</p>
          <p className='text-body2 mb-6'>"{description}"</p>
          <div className='flex gap-4 justify-center'>
            <a href={x} target="_blank"><Image className='cursor-pointer' src={X} alt="link-X" /></a>
            <a href={linkedIn} target="_blank"><Image className='cursor-pointer' src={linkedInIcon} alt="link-linkedin" /></a>
          </div>
        </div> 
      )}

      <button onClick={handleClick} className={`flex items-center absolute bottom-[-28px] p-4 rounded-full ${openCard ? 'bg-secondary-100' : 'bg-contrast'} ${openCard ? 'hover:bg-contrast' : 'hover:bg-secondary-100'} cursor-pointer`}>
        {openCard ? 
          <Image src={close} alt="close-icon" /> : 
          <Image src={cross} alt="cross-icon" />
        }
      </button>
    </div>
  )
}
