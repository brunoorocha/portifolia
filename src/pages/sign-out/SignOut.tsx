import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { routes } from '../routes'
import { tokenKey } from '../../domain/api-service'
import { User } from '../../domain/entities/User'
import { useGoogleLogout } from 'react-google-login'

interface SignOutProps {
  signOut: () => void
  setAuthenticatedUser: (user?: User) => void
}

export const SignOut: React.FC<SignOutProps> = props => {
  const history = useHistory()
  const GoogleLogout = useGoogleLogout({
    clientId: '791072806762-t642r6jru1lr0747pepcjdvbk68rlr1q.apps.googleusercontent.com'
  })

  useEffect(() => {
    props.signOut()
    GoogleLogout.signOut()
    props.setAuthenticatedUser(undefined)
    history.push(routes.home)
    localStorage.setItem(tokenKey, '')
  }, [props, history, GoogleLogout])

  return null
}
