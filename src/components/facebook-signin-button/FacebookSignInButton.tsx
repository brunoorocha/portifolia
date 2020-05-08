import React from 'react'
import FacebookLogin from 'react-facebook-login'
import { FacebookIcon } from './FacebookIcon'

interface FacebookSignInButtonProps {
  appId: string
  text?: string
  onSuccess: (response: any) => void
}

export const FacebookSignInButton: React.FC<FacebookSignInButtonProps> = props => {
  const textButton = props.text ?? 'Sign in with Facebook'
 
  return (
    <FacebookLogin
      fields="id, email, name, photos"
      textButton={textButton}
      cssClass="color-white h-large bg-color-facebook d-flex ai-center w-100per jc-center br-small b-none fw-500 cursor-pointer"
      icon={<FacebookIcon className="mr-smedium" />}
      callback={props.onSuccess}
      { ...props } />

  )
}
