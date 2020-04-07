import React from 'react'
import { Menu, Layout, Row, Col } from 'antd'
import { ChevronDown } from 'react-feather'
import { DibbbreLogo } from '../base/DibbbreLogo'
import { PrimaryButton, Button } from '../base/Button'

export const NavBar: React.FC = () => {
  const { Header } = Layout
  const { Item } = Menu

  return (
    <Header className="bg-color-white">
      <Row gutter={[20, 0]} align="middle">
        <Col>
          <DibbbreLogo size="small" />
        </Col>
        <Col xs={8} sm={16} md={16}>
          <Menu
            theme="light"
            mode="horizontal"
          >
            <Item key="1">Explore <ChevronDown className="f-icon f-icon-smedium" /></Item>
            <Item key="2">For Designers <ChevronDown className="f-icon f-icon-smedium" /></Item>
            <Item key="3">Hiring Designers?</Item>
          </Menu>
        </Col>
        <Col flex="auto" className="ta-right">
          <Button className="mr-small">Sign in</Button>
          <PrimaryButton>Sign up</PrimaryButton>
        </Col>
      </Row>
    </Header>
  )
}
