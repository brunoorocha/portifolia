import React from 'react'
import { Menu, Layout, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'react-feather'
import { DibbbreLogo } from '../base/DibbbreLogo'
import { LinkButton } from '../base/Button'

export const NavBar: React.FC = () => {
  const { Header } = Layout
  const { Item } = Menu

  return (
    <Header className="bg-color-white">
      <Row gutter={[20, 0]} align="middle">
        <Col>
          <Link to="">
            <DibbbreLogo size="small" />
          </Link>
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
        <Col flex="auto">
          <div className="d-flex jc-end">
            <LinkButton to="/sign-up" className="mr-small">Sign in</LinkButton>
            <LinkButton to="/sign-up" type="primary">Sign up</LinkButton>
          </div>
        </Col>
      </Row>
    </Header>
  )
}
