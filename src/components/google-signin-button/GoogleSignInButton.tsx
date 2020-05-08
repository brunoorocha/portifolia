import React from 'react'
import GoogleLogin from 'react-google-login'

interface GoogleSignInButtonProps {
  clientId: string
  onSuccess: (response: any) => void
  text?: string
}

export const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = props => {
  return (
    <GoogleLogin 
      clientId={props.clientId}
      onSuccess={props.onSuccess}
      onFailure={(error) => {}}
      className="google-button w-100per">
      <span>{props.text || 'Sign in with Google'}</span>
    </GoogleLogin>
  )
}
