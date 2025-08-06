"use client"

import { useRouter } from "next/navigation";

export const Button = ({children, variant, disabled, onClick}) => {

  const router = useRouter();

  const handleClick = () => {
    router.push('/contact');
  };

  const getVariantClass = () => {
    const variants = {
      primary: 'bg-transparent hover:bg-white border-2 border-white hover:text-secondary-500',
      primaryBlue: 'bg-transparent hover:bg-secondary-400 border-2 border-secondary-400 text-secondary-400 hover:text-white',
      secondary: 'bg-white text-secondary-500 hover:bg-secondary-100',
    }

    return variants[variant]
  }

  return (
    <button className={`px-8 rounded-3xl h-12 cursor-pointer disabled:opacity-25 disabled:cursor-none font-[600] ${getVariantClass()}`} disabled={disabled} onClick={onClick || handleClick}>{children}</button>
  )
}
