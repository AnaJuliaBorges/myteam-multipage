import React from 'react'

import Image from 'next/image'
import pattern1 from '@/assets/bg-pattern-home-6-about-5.svg'
import { Button } from './button'

export const FooterSecondary = () => {

  return (
    <section className='relative flex py-17 px-6 lg:px-0 w-full justify-center bg-contrast'>
      <Image className="absolute bottom-0 left-0" width={200} height={200} src={pattern1} aria-hidden alt='pattern'/>
      <div className='w-full max-w-[1110px]'>
        <div className='flex justify-center gap-[260px] items-center'>
          <h1 className='font-bold text-h2 text-secondary-400'>Ready to get started?</h1>
          <Button variant='primaryBlue'>contact us</Button>
        </div>
      </div>
    </section>
  )
}
