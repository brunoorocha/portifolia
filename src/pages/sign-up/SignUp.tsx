import React from 'react'
import { Row, Col, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { DibbbreLogo, PrimaryButton } from '../../components'

export const SignUp: React.FC = () => {
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
          <p>Already a member? <Link to="">Sign in</Link></p>
        </Row>

        <div style={{ maxWidth: '480px', margin: '0 auto' }} className="pdt-ularge pdb-large pdl-medium pdr-medium">
          <h3>Sign up to Dibbbre</h3>
          <Form layout="vertical">
            <Row gutter={[20, 0]}>
              <Col xs={24} sm={12}>
                <Form.Item label="Name" name="name">
                  <Input />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12}>
                <Form.Item label="Username" name="username">
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Form.Item label="Email" name="email">
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Form.Item label="Password" name="password">
                  <Input.Password />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Form.Item>
                  <PrimaryButton isSubmit={true}>Create Account</PrimaryButton>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </Col>
    </Row>
  )
}
