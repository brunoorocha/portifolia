import React from 'react'
import FacebookLogin from 'react-facebook-login'
import { Facebook } from 'react-feather'

interface FacebookSignInButtonProps {
  appId: string
  text?: string
  callback: (response: any) => void
}

export const FacebookSignInButton: React.FC<FacebookSignInButtonProps> = props => {
  const textButton = props.text ?? 'Sign in with Facebook'
 
  return (
    <FacebookLogin
      fields="id, email, name, photos"
      textButton={textButton}
      cssClass="h-large d-flex ai-center w-100per jc-center bg-color-facebook color-white br-small b-none fw-500"
      { ...props } />

  )
}
