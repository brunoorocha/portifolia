import React from 'react'
import portifoliaLogo from '../../assets/images/portifolia-logo.png'

interface PortifoliaLogoProps {
  size?: 'small' | 'normal' | 'large'
  style?: React.CSSProperties
}

export const PortifoliaLogo: React.FC<PortifoliaLogoProps> = props => {
  const size = props.size || 'normal'

  const sizesClassNames = {
    small: 'h-lmedium',
    normal: 'h-slarge',
    large: 'h-large',
  }

  return (
    <img src={portifoliaLogo} alt="" className={sizesClassNames[size]} style={props.style} />
  )
}

