import React from 'react'
import { Button as AntdButton } from 'antd'

interface ButtonProps {
  onClick?: () => void
  id?: string
}

export const PrimaryButton: React.FC<ButtonProps> = props => (
  <AntdButton
    type="primary"
    className="br-small h-slarge fw-700"
    onClick={props.onClick}
    id={props.id}
  >
    { props.children }
  </AntdButton>
)

export const Button: React.FC<ButtonProps> = props => (
  <AntdButton
    type="default"
    className="br-small h-slarge fw-700"
    onClick={props.onClick}
    id={props.id}
  >
    { props.children }
  </AntdButton>
)

export const GhostButton: React.FC<ButtonProps> = props => (
  <AntdButton
    type="ghost"
    className="br-small h-slarge fw-700"
    onClick={props.onClick}
    id={props.id}
  >
    { props.children }
  </AntdButton>
)
