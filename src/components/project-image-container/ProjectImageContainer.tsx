import React from 'react'
import ProgressiveImage from 'react-progressive-image-loading'
import { cloudinaryImagePreview } from '../../utils/cloudinary-image-preview'

interface ProjectImageContainerProps {
  imageUrl: string
  className?: string
}

export const ProjectImageContainer: React.FC<ProjectImageContainerProps> = props => {
  return (
    <div className={`image-aspect-ratio-container o-hidden ${props.className}`}>
      <ProgressiveImage
        src={props.imageUrl}
        preview={cloudinaryImagePreview(props.imageUrl)}
        transitionTime={300}
        render={(src, style) => <img src={src} alt="" style={style} /> } />
    </div>
  )
}
