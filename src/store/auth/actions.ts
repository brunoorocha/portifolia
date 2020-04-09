import { action } from 'typesafe-actions'
import { AuthTypes } from './types'
import { User } from '../../domain/entities/User'

export const signIn = (username: string, password: string) => action(AuthTypes.SIGN_IN_START, { username, password })

export const signInEnd = () => action(AuthTypes.SIGN_IN_END)

export const setToken = (token: string) => action(AuthTypes.SET_TOKEN, { token })

export const setAuthenticatedUser = (user: User) => action(AuthTypes.SET_AUTHENTICATED_USER, { user })
