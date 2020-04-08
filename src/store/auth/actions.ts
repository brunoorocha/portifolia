import { action } from 'typesafe-actions'
import { AuthTypes } from './types'

export const signInStart = (username: string, password: string) => action(AuthTypes.SIGN_IN_START, { username, password })

export const signInEnd = () => action(AuthTypes.SIGN_IN_END)

export const setToken = (token: string) => action(AuthTypes.SET_TOKEN, { token })
