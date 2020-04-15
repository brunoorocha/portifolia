import React from 'react'
import { Heart } from 'react-feather'

interface LikeButtonProps {
  isLiked?: boolean
  onLike?: () => void
}

export const LikeButton: React.FC<LikeButtonProps> = props => {
  const classNames = `w-lmedium h-lmedium d-flex ai-center jc-center pd-none br-small b-none o-none t-default ${ props.isLiked ? 'bg-color-pink-500 color-white' : '' }`

  return (
    <button onClick={props.onLike} className={classNames}>
      <Heart className="f-icon f-icon-smedium" />
    </button>
  )
}
