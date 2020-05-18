import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Col, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { PortifoliaLogo, PrimaryButton, FacebookSignInButton } from '../../components'
import { routes } from '../routes'
import { User } from '../../domain/entities/User'
import loginIllustration from '../../assets/images/login-illustration.png'
import { OrSeparator } from '../../components/or-separator/OrSeparator'
import { GoogleSignInButton } from '../../components/google-signin-button/GoogleSignInButton'

interface SignInProps {
  signIn: (username: string, password: string) => void
  facebookSignIn: (accessToken: string) => void
  googleSignIn: (accessToken: string) => void
  isLoadingSignIn: boolean
  isLoadingFacebookSignIn: boolean
  isLoadingGoogleSignIn: boolean
  user?: User
}

export const SignIn: React.FC<SignInProps> = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  useEffect(() => {
    if (props.user) {
      history.push(routes.home)
    }
  }, [props.user, history])

  const onFormFinish = () => {
    props.signIn(username, password)
  }

  const onFacebookSignInResponse = (response: any) => {
    const facebookToken = response.accessToken ?? ''
    props.facebookSignIn(facebookToken)
  }

  const onGoogleSignInSuccess = (response: any) => {
    const googleToken = response.accessToken ?? ''
    props.googleSignIn(googleToken)
  }

  return (
    <Row>
      <Col xs={0} sm={0} md={8} className="bg-color-pink-100 h-100vh pdl-lmedium pdr-lmedium d-flex fd-column jc-space-between">
        <div className="pdt-lmedium">
          <Link to="">
            <PortifoliaLogo size="small" />
          </Link>
        </div>
        <div className="d-flex pdb-ularge">
          <img src={loginIllustration} alt="" className="w-100per" style={{ objectFit: 'cover' }} />
        </div>
      </Col>

      <Col flex="auto">
        <Row align="middle" justify="end" className="pdt-lmedium pdr-lmedium pdl-lmedium">
          <Col className="d-flex ai-center">
            <span>Not a member? <Link to={routes.signUp}>Sign up now</Link></span>
          </Col>
        </Row>

        <div style={{ maxWidth: '480px', margin: '0 auto' }} className="pdt-ularge pdb-large pdl-medium pdr-medium">
          <h3>Sign in to Portifolia</h3>
          
          <Row gutter={[20, 20]}>
          <Col xs={24} sm={12} md={12}>
              <FacebookSignInButton
                appId="278645166498446"
                onSuccess={onFacebookSignInResponse}
                text="Facebook"
                isDisabled={props.isLoadingFacebookSignIn} />
            </Col>
            <Col xs={24} sm={12} md={12}>
              <GoogleSignInButton
                clientId="791072806762-t642r6jru1lr0747pepcjdvbk68rlr1q.apps.googleusercontent.com"
                onSuccess={onGoogleSignInSuccess}
                text="Google"
                isDisabled={props.isLoadingGoogleSignIn} />
            </Col>
          </Row>

          <Row>
            <OrSeparator />
          </Row>

          <Form layout="vertical" onFinish={onFormFinish}>
            <Row>
              <Col span={24}>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[{ required: true, message: 'Please input your username' }]}
                >
                  <Input onChange={event => setUsername(event.target.value)} />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password' }]}
                >
                  <Input.Password onChange={event => setPassword(event.target.value)} />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Form.Item>
                  <PrimaryButton
                    isSubmit={true}
                    isLoading={props.isLoadingSignIn}
                  >
                    Sign in
                  </PrimaryButton>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </Col>
    </Row>
  )
}
