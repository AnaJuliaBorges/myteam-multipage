import Image from 'next/image'

export const FeaturedItem = ({icon, title, description}) => {
  return (
    <div className='flex gap-6 items-center'>
      <Image width={72} height={72} src={icon} alt={`icon-${title}`} />
      <div className='flex flex-col gap-4'>
        <p className='text-contrast font-bold'>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}
