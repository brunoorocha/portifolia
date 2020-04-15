import React, { useState } from 'react'
import { Heart } from 'react-feather'

interface LikeButtonProps {
  isLiked?: boolean
  onClick?: () => void
}

export const LikeButton: React.FC<LikeButtonProps> = props => {
  const [isLiked, setIsLiked] = useState(false)
  const classNames = `w-lmedium h-lmedium d-flex ai-center jc-center pd-none br-small b-none o-none t-default ${ props.isLiked ? 'bg-color-pink-500 color-white' : '' }`

  const onClick = () => {
    setIsLiked(!isLiked)
    props.onClick && props.onClick()
  }

  return (
    <button onClick={onClick} className={classNames}>
      <Heart className="f-icon f-icon-smedium" />
    </button>
  )
}
