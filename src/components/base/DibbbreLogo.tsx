import React from 'react'
import dibbreLogo from '../../assets/images/portifolia-logo.png'
import dibbreLogoYellow from '../../assets/images/dibbbre-logo-yellow.png'

interface DibbbreLogoProps {
  size?: 'small' | 'normal' | 'large'
  style?: React.CSSProperties
  color?: 'black' | 'yellow'
}

export const DibbbreLogo: React.FC<DibbbreLogoProps> = props => {
  const size = props.size || 'normal'
  const color = props.color || 'black'
  const image = {
    black: dibbreLogo,
    yellow: dibbreLogoYellow
  }

  const sizesClassNames = {
    small: 'h-lmedium',
    normal: 'h-slarge',
    large: 'h-large',
  }

  return (
    <img src={image[color]} alt="" className={sizesClassNames[size]} style={props.style} />
  )
}

