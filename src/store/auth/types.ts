import { User } from '../../domain/entities/User'
import { SignInDTO } from '../../domain/dto/sign-in-dto'

export enum AuthActionTypes {
  SIGN_IN_START = '@auth/SIGN_IN_START',
  SIGN_IN_END = '@auth/SIGN_IN_END',
  SIGN_OUT = '@auth/SIGN_OUT',
  SET_TOKEN = '@auth/SET_TOKEN',
  SET_AUTHENTICATED_USER = '@auth/SET_AUTHENTICATED_USER',
}

export interface AuthState {
  readonly token?: string
  readonly isLoading: boolean
  readonly authenticatedUser?: User
}

export interface SignInStartAction {
  type: typeof AuthActionTypes.SIGN_IN_START
  payload: SignInDTO
}

export interface SetTokenAction {
  type: typeof AuthActionTypes.SET_TOKEN
  payload: { token: string }
}

export interface SetAuthenticatedUserAction {
  type: typeof AuthActionTypes.SET_AUTHENTICATED_USER
  payload: { user: User }
}
