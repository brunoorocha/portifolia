import { action } from 'typesafe-actions'
import { AuthActionTypes } from './types'
import { User } from '../../domain/entities/User'

export const signIn = (username: string, password: string) => action(AuthActionTypes.SIGN_IN_START, { username, password })

export const signInEnd = () => action(AuthActionTypes.SIGN_IN_END)

export const setToken = (token: string) => action(AuthActionTypes.SET_TOKEN, { token })

export const signOut = () => action(AuthActionTypes.SIGN_OUT)

export const setAuthenticatedUser = (user: User) => action(AuthActionTypes.SET_AUTHENTICATED_USER, { user })
