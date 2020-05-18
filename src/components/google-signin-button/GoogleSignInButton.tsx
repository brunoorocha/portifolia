import React from 'react'
import GoogleLogin from 'react-google-login'

interface GoogleSignInButtonProps {
  clientId: string
  text?: string
  onSuccess: (response: any) => void
  isDisabled?: boolean
}

export const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = props => {
  return (
    <GoogleLogin 
      clientId={props.clientId}
      onSuccess={props.onSuccess}
      onFailure={(error) => {}}
      disabled={!!props.isDisabled}
      className="google-button w-100per">
      <span>{props.text || 'Sign in with Google'}</span>
    </GoogleLogin>
  )
}
