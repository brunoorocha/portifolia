import React, { useEffect } from 'react'
import { tokenKey } from '../../domain/api-service'

interface RoutesAuthProps {
  setToken: (token: string) => void
  token?: string
}

export const RoutesAuth: React.FC<RoutesAuthProps> = props => {
  useEffect(() => {
    if (props.token) { return }

    const token = localStorage.getItem(tokenKey)
    if (!token) { return }

    props.setToken(token)
  })

  return null
}


