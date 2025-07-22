import Link from 'next/link'

export const CustomLink = ({children, href}) => {
  return (
    <Link className='hover:text-contrast cursor-pointer' href={href}>{children}</Link>
  )
}
