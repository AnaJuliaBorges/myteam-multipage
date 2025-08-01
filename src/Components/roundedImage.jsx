import Image from 'next/image'
import React from 'react'

export const RoundedImage = ({name, size, image}) => {
  return (
    <Image className="rounded-full border-2 border-[#C4FFFE]" width={size} height={size} src={image} alt={`imagem-${name}`}/>
  )
}
