import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { routes } from '../routes'
import { tokenKey } from '../../domain/api-service'
import { User } from '../../domain/entities/User'

interface SignOutProps {
  signOut: () => void
  setAuthenticatedUser: (user?: User) => void
}

export const SignOut: React.FC<SignOutProps> = props => {
  const history = useHistory()

  useEffect(() => {
    props.signOut()
    props.setAuthenticatedUser(undefined)
    history.push(routes.home)
    localStorage.setItem(tokenKey, '')
  }, [props, history])

  return null
}
