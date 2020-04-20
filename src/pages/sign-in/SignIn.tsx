import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Col, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { DibbbreLogo, PrimaryButton } from '../../components'
import { routes } from '../routes'
import { User } from '../../domain/entities/User'
import bgPatterns from '../../assets/images/background-patterns.png'

interface SignInProps {
  signIn: (username: string, password: string) => void
  isLoadingSignIn: boolean
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

  return (
    <Row>
      <Col xs={0} sm={0} md={10} className="h-100vh o-hidden">
      <img src={bgPatterns} alt="" className="w-100per h-100vh" style={{ objectFit: 'cover' }} />
      </Col>

      <Col flex="auto">
        <Row align="middle" className="pdt-lmedium pdr-lmedium pdl-lmedium">
          <Col flex="auto">
            <Link to="">
              <DibbbreLogo size="small" />
            </Link>
          </Col>
          <Col className="d-flex ai-center">
            <span>Not a member? <Link to={routes.signUp}>Sign up now</Link></span>
          </Col>
        </Row>

        <div style={{ maxWidth: '480px', margin: '0 auto' }} className="pdt-ularge pdb-large pdl-medium pdr-medium">
          <h3>Sign in to Portifolia</h3>
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
