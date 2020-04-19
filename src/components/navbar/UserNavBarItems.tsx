import React from 'react'
import { Menu, Avatar, Dropdown } from 'antd'
import { Link } from 'react-router-dom'
import { User as UserIcon } from 'react-feather'
import { LinkButton } from '../base/Button'
import { routes } from '../../pages/routes'

interface UserNavBarItemsProps {
  username: string
  profileImageUrl?: string
}

export const UserNavBarItems: React.FC<UserNavBarItemsProps> = props => {
  const { Item } = Menu

  const userDropdownMenu = (
    <Menu>
      <Item key="0">
        <Link to={`/${props.username}`}>
          { props.username }
        </Link>
      </Item>
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
        <Avatar icon={<UserIcon />} src={props.profileImageUrl} />
      </Dropdown>

      <LinkButton to={routes.upload} type="primary" className="ml-medium">Upload</LinkButton>
    </>
  )
}