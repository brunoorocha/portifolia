import React from 'react'
import { Menu, Avatar, Dropdown } from 'antd'
import { Link } from 'react-router-dom'
import { User as UserIcon } from 'react-feather'
import { LinkButton } from '../base/Button'
import { routes } from '../../pages/routes'

export const UserNavBarItems: React.FC = props => {
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
    <>
      <Dropdown overlay={userDropdownMenu} trigger={['hover']}>
        <Avatar icon={<UserIcon />} />
      </Dropdown>

      <LinkButton to={routes.signUp} type="primary" className="ml-medium">Upload</LinkButton>
    </>
  )
}