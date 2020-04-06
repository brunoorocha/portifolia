import React from 'react'
import dibbreLogo from '../../assets/images/dibbbre-logo.png'

interface DibbbreLogoProps {
  size?: 'small' | 'normal' | 'large'
}

export const DibbbreLogo: React.FC<DibbbreLogoProps> = props => {
  const size = props.size || 'normal'
  const sizesClassNames = {
    small: 'h-medium',
    normal: 'h-lmedium',
    large: 'h-slarge',
  }

  return (
    <img src={dibbreLogo} alt="" className={sizesClassNames[size]} />
  )
}

