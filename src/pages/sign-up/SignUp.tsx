import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Col, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { PortifoliaLogo, PrimaryButton, FacebookSignInButton, GhostButton } from '../../components'
import { routes } from '../routes'
import { CreateUserDTO } from '../../domain/dto/create-user-dto'
import { User } from '../../domain/entities/User'
import loginIllustration from '../../assets/images/login-illustration.png'

interface SignUpProps {
  isCreateUserLoading: boolean
  createUser: (createUserDTO: CreateUserDTO) => void
  facebookSignIn: (facebookToken: string) => void
  user?: User
}

export const SignUp: React.FC<SignUpProps> = props => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  useEffect(() => {
    if (props.user) {
      history.push(routes.home)
    }
  }, [props.user, history])

  const onFormFinish = () => {
    props.createUser({ name, username, email, password })
  }

  const onFacebookSignInResponse = (response: any) => {
    const facebookToken = response.accessToken ?? ''
    props.facebookSignIn(facebookToken)
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
        <Row justify="end" className="pdt-lmedium pdr-lmedium pdl-lmedium">
          <Col className="d-flex ai-center">
            <span>Already a member? <Link to={routes.signIn}>Sign in</Link></span>
          </Col>
        </Row>

        <div style={{ maxWidth: '480px', margin: '0 auto' }} className="pdt-ularge pdb-large pdl-medium pdr-medium">
          <h3>Sign up to Portifolia</h3>

          <Row gutter={[20, 20]}>
            <Col xs={24} sm={12} md={12}>
              <FacebookSignInButton
                appId="278645166498446"
                callback={onFacebookSignInResponse} />
            </Col>
            <Col xs={24} sm={12} md={12}>
              <GhostButton className="w-100per">Sign in with Google</GhostButton>
            </Col>
          </Row>

          <Row justify="center">
            <p>or</p>
          </Row>

          <Form layout="vertical" onFinish={onFormFinish}>
            <Row gutter={[20, 0]}>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: 'Please input your name' }]}>
                  <Input onChange={event => setName(event.target.value)} />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12}>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[{ required: true, message: 'Please input your username' }]}>
                  <Input onChange={event => setUsername(event.target.value)} />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: 'Please input your email' }]}>
                  <Input onChange={event => setEmail(event.target.value)} />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password' }]}>
                  <Input.Password onChange={event => setPassword(event.target.value)} />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Form.Item>
                  <PrimaryButton isLoading={props.isCreateUserLoading} isSubmit={true}>Create Account</PrimaryButton>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </Col>
    </Row>
  )
}
