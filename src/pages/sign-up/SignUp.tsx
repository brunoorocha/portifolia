import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Col, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { DibbbreLogo, PrimaryButton } from '../../components'
import { routes } from '../routes'
import { CreateUserDTO } from '../../domain/dto/create-user-dto'
import { User } from '../../domain/entities/User'

interface SignUpProps {
  isCreateUserLoading: boolean
  createUser: (createUserDTO: CreateUserDTO) => void
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
          <p>Already a member? <Link to={routes.signIn}>Sign in</Link></p>
        </Row>

        <div style={{ maxWidth: '480px', margin: '0 auto' }} className="pdt-ularge pdb-large pdl-medium pdr-medium">
          <h3>Sign up to Dibbbre</h3>
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
