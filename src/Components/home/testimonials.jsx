import Image from 'next/image'
import iconQuotes from '@/assets/icon-quotes.svg'

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
        <Image className="rounded-full border-2 border-[#C4FFFE]" width={62} height={62} src={image} alt={`imagem-${name}`}/>
      </div>
    </div>
  )
}
