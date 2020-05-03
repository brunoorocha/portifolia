import { SignInDTO } from '../../domain/dto/sign-in-dto'

export enum AuthActionTypes {
  SIGN_IN_START = '@auth/SIGN_IN_START',
  SIGN_IN_END = '@auth/SIGN_IN_END',
  FACEBOOK_SIGN_IN_START = '@auth/FACEBOOK_SIGN_IN_START',
  FACEBOOK_SIGN_IN_END = '@auth/FACEBOOK_SIGN_IN_END',
  SIGN_OUT = '@auth/SIGN_OUT',
  SET_TOKEN = '@auth/SET_TOKEN'
}

export interface AuthState {
  readonly token?: string
  readonly isLoading: boolean
}

export interface SignInStartAction {
  type: typeof AuthActionTypes.SIGN_IN_START
  payload: SignInDTO
}

export interface FacebookSignInStartAction {
  type: typeof AuthActionTypes.FACEBOOK_SIGN_IN_START
  payload: { facebookToken: string }
}

export interface SetTokenAction {
  type: typeof AuthActionTypes.SET_TOKEN
  payload: { token: string }
}