import React from 'react'
import { Row, Col } from 'antd'
import { FacebookSignInButton } from '..'
import { GoogleSignInButton } from '../google-signin-button/GoogleSignInButton'
import { Message } from '../../models/Message'

interface SocialSignInProps {
  facebookSignIn: (accessToken: string) => void
  googleSignIn: (accessToken: string) => void
  pushMessage: (message: Message) => void
  isLoadingFacebookSignIn: boolean
  isLoadingGoogleSignIn: boolean
}

export const SocialSignIn: React.FC<SocialSignInProps> = props => {
  const onFacebookSignInSuccess = (response: any) => {
    const facebookToken = response.accessToken ?? ''
    props.facebookSignIn(facebookToken)
  }

  const onFacebookSignInFailure = (error: any) => {
    const errorMessage = error.status ?? 'Unknowed error'
    props.pushMessage({ content: errorMessage, type: 'error' })
  }

  const onGoogleSignInSuccess = (response: any) => {
    const googleToken = response.accessToken ?? ''
    props.googleSignIn(googleToken)
  }

  const onGoogleSignInFailure = (error: any) => {
    props.pushMessage({ content: error, type: 'error' })
  }

  return (
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={12} md={12}>
        <FacebookSignInButton
          appId="278645166498446"
          text="Facebook"
          onSuccess={onFacebookSignInSuccess}
          onFailure={onFacebookSignInFailure}
          isDisabled={props.isLoadingFacebookSignIn} />
      </Col>
      <Col xs={24} sm={12} md={12}>
        <GoogleSignInButton
          clientId="791072806762-t642r6jru1lr0747pepcjdvbk68rlr1q.apps.googleusercontent.com"
          text="Google"
          onSuccess={onGoogleSignInSuccess}
          onFailure={onGoogleSignInFailure}
          isDisabled={props.isLoadingGoogleSignIn} />
      </Col>
    </Row>
  )
}

