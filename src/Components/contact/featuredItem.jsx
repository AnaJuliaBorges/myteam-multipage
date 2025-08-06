import Image from 'next/image'

export const FeaturedItem = ({icon, title}) => {
  return (
    <div className='flex gap-6 items-center'>
      <Image width={72} height={72} src={icon} alt={`icon-${title}`} />      
      <p className='font-bold'>{title}</p>
    </div>
  )
}
