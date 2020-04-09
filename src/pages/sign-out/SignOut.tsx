import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { routes } from '../routes'
import { tokenKey } from '../../domain/api-service'

interface SignOutProps {
  signOut: () => void
}

export const SignOut: React.FC<SignOutProps> = props => {
  const history = useHistory()

  useEffect(() => {
    props.signOut()
    history.push(routes.home)
    localStorage.setItem(tokenKey, '')
  }, [props, history])

  return null
}
