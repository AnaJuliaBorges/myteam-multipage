import React from 'react'

export const Divider = ({color}) => {

  const getColor = () => {
    const colors = {
      secondary: 'border-secondary-100',
      contrast: 'border-contrast'
    }

    return colors[color]
  }
  return (
    <div className={`${getColor()} border-t-3 w-12 hidden lg:inline`}/>
  )
}
