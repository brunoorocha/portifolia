import React from 'react'
import FacebookLogin from 'react-facebook-login'

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
      cssClass="color-white h-slarge bg-color-facebook d-flex ai-center w-100per jc-center br-small b-none fw-500"
      { ...props } />

  )
}
