import React from 'react'

import logo from '@/assets/logo.svg'
import facebook from '@/assets/icon-facebook.svg'
import pinterest from '@/assets/icon-pinterest.svg'
import x from '@/assets/icon-twitter.svg'

import Image from 'next/image'
import { CustomLink } from './link'

export const Footer = () => {

  return (
    <footer className='flex py-12 px-6 lg:px-0 w-full justify-center bg-secondary-500'>
      <div className='flex justify-between w-full max-w-[1110px]'>
        <div className='flex'>
          <div className='flex flex-col gap-6 items-start mr-[125px]'>          
            <Image src={logo} alt="logo" />
            <div className='flex gap-10'>
              <CustomLink href='/'>home</CustomLink>
              <CustomLink href='/about'>about</CustomLink>
            </div>
          </div>
          <p className='flex flex-col justify-between items-start text-body2 opacity-60'>
            <span>987  Hillcrest Lane</span>
            <span>Irvine, CA</span>
            <span>California 92714</span>
            <span>Call Us : 949-833-7432</span>
          </p>
        </div>
        <div className='flex flex-col justify-between items-end'>
          <div className='flex gap-4'>
            <a target="_blank" className='cursor-pointer'><Image src={facebook} alt="link-facebook" /></a>
            <a target="_blank" className='cursor-pointer'><Image src={pinterest} alt="link-pinterest" /></a>
            <a target="_blank" className='cursor-pointer'><Image src={x} alt="link-X" /></a>
          </div>
          <p className='text-body2 opacity-60'>Copyright 2020. All Rights Reserved</p>
        </div>
          
      </div>

    </footer>
  )
}
