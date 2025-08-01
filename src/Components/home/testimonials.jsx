import Image from 'next/image'
import iconQuotes from '@/assets/icon-quotes.svg'
import { RoundedImage } from '../roundedImage'

export const Testimonials = ({image, name, role, description}) => {
  return (
    <div className='flex gap-6 items-center relative w-full'>
      <Image className='absolute top-[-26px] z-1' width={56} height={67} src={iconQuotes} alt={`icon-quotes`} />
      <div className='flex flex-col z-2 gap-6 items-center'>
        <p className='text-body2'>{description}</p>
        <div>
            <p className='font-bold text-body1 text-secondary-100'>{name}</p>
            <p className='text-xs font-normal italic'>{role}</p>
        </div>
        <RoundedImage name={name} image={image} size={62}/>
      </div>
    </div>
  )
}
