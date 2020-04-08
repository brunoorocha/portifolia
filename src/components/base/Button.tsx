import React from 'react'
import { Button as AntdButton } from 'antd'
import { Link } from 'react-router-dom'

interface ButtonProps {
  className?: string
  onClick?: () => void
  id?: string
  isSubmit?: boolean
}

interface LinkButtonProps extends ButtonProps {
  type?: 'primary' | 'default'
  to?: string
}

export const PrimaryButton: React.FC<ButtonProps> = props => (
  <AntdButton
    type="primary"
    className={`br-small h-slarge fw-700 ${props.className || ''}`}
    onClick={props.onClick}
    id={props.id}
    htmlType={props.isSubmit ? 'submit' : 'button' }
  >
    { props.children }
  </AntdButton>
)

export const Button: React.FC<ButtonProps> = props => (
  <AntdButton
    type="default"
    className={`br-small h-slarge fw-700 ${props.className || ''}`}
    onClick={props.onClick}
    id={props.id}
  >
    { props.children }
  </AntdButton>
)

export const GhostButton: React.FC<ButtonProps> = props => (
  <AntdButton
    type="ghost"
    className={`br-small h-slarge fw-700 ${props.className || ''}`}
    onClick={props.onClick}
    id={props.id}
  >
    { props.children }
  </AntdButton>
)

export const LinkButton: React.FC<LinkButtonProps> = props => {
  const type = props.type || 'default'
  const classes = {
    primary: `ant-btn ant-btn-primary br-small h-slarge fw-700 ${props.className}`,
    default: `ant-btn ant-btn-default br-small h-slarge fw-700 ${props.className}`
  }

  return (
    <Link style={{ padding: '4px 12px' }} to={props.to || ''} className={classes[type]}>
      {props.children}
    </Link>
  )
}

