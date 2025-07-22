import React from 'react'
import logo from '@/assets/logo.svg'
import Image from 'next/image'
import { Button } from './button'
import { CustomLink } from './link'

export const Header = () => {

  return (
    <header className='flex py-16 px-6 lg:px-0 w-full justify-center'>
      <div className='flex justify-between w-full max-w-[1151px] items-center'>
        <div className='flex gap-20 items-center'>
          <Image src={logo}/>
          <div className='flex gap-10'>
            <CustomLink href='/'>home</CustomLink>
            <CustomLink href='/about'>about</CustomLink>
          </div>
        </div>
        <Button variant='primary'>contact us</Button>
      </div>

    </header>
  )
}
