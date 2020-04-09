import React from 'react'
import { Menu, Layout, Row, Col, Dropdown, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { ChevronDown, User as UserIcon } from 'react-feather'
import { DibbbreLogo } from '../base/DibbbreLogo'
import { LinkButton } from '../base/Button'
import { routes } from '../../pages/routes'
import { User } from '../../domain/entities/User'

interface NavBarProps {
  user?: User
}

export const NavBar: React.FC<NavBarProps> = props => {
  const { Header } = Layout
  const { Item } = Menu

  const userDropdownMenu = (
    <Menu>
      <Item key="0">Profile</Item>
      <Menu.Divider />
      <Item key="1">Account settings</Item>
      <Item key="2">
        <Link to={routes.signOut}>Sign Out</Link>
      </Item>
    </Menu>
  )

  return (
    <Header className="bg-color-white">
      <Row gutter={[20, 0]} align="middle">
        <Col>
          <Link to={routes.home}>
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
          { !props.user && 
            <div className="d-flex ai-center jc-end">
              <LinkButton to={routes.signIn} className="mr-small">Sign in</LinkButton>
              <LinkButton to={routes.signUp} type="primary">Sign up</LinkButton>
            </div>
           }
           { props.user && 
            <div className="d-flex ai-center jc-end">
              <Dropdown overlay={userDropdownMenu} trigger={['hover']}>
                <Avatar icon={<UserIcon />} />
              </Dropdown>

              <LinkButton to={routes.signUp} type="primary" className="ml-medium">Upload</LinkButton>
            </div>
           }
        </Col>
      </Row>
    </Header>
  )
}
