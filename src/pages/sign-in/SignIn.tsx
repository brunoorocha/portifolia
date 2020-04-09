import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Col, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { DibbbreLogo, PrimaryButton } from '../../components'
import { routes } from '../routes'
import { User } from '../../domain/entities/User'

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
      <Col xs={0} sm={0} md={8} className="bg-color-yellow-100 h-100vh">
        <div className="pd-large">
          <Link to="">
            <DibbbreLogo color="yellow" />
          </Link>
          <h3 className="color-yellow-800 mt-slarge">Discover the world’s top Designers & Creatives.</h3>
        </div>
        <img src="https://cdn.dribbble.com/assets/auth/sign-up-309e26707e1a09e0f27bdf7854df9e3dbdc45d4bbf99ef0d75dc2f3a3a0b4164.png" alt="" className="w-100per" />
      </Col>

      <Col flex="auto">
        <Row justify="end" className="pdt-lmedium pdr-lmedium">
          <p>Not a member? <Link to={routes.signUp}>Sign up now</Link></p>
        </Row>

        <div style={{ maxWidth: '480px', margin: '0 auto' }} className="pdt-ularge pdb-large pdl-medium pdr-medium">
          <h3>Sign in to Dibbbre</h3>
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
