import React from 'react'
import GoogleLogin from 'react-google-login'

interface GoogleSignInButtonProps {
  text?: string
}

export const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = props => {
  const onSuccess = (response: any) => {
    debugger
  }

  return (
    <GoogleLogin 
      clientId="791072806762-t642r6jru1lr0747pepcjdvbk68rlr1q.apps.googleusercontent.com"
      onSuccess={(response) => {
        debugger
      }}
      onFailure={(error) => {
        debugger
      }}
      className="google-button w-100per">
      <span>{props.text || 'Sign in with Google'}</span>
    </GoogleLogin>
  )
}
