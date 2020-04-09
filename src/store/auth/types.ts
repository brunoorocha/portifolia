import { User } from "../../domain/entities/User";

export enum AuthTypes {
  SIGN_IN_START = '@auth/SIGN_IN_START',
  SIGN_IN_END = '@auth/SIGN_IN_END',
  SET_TOKEN = '@auth/SET_TOKEN',
  SET_AUTHENTICATED_USER = '@auth/SET_AUTHENTICATED_USER',
}

export interface AuthState {
  readonly token?: string
  readonly isLoading: boolean
  readonly authenticatedUser?: User
}

export interface SignInStartAction {
  type: typeof AuthTypes.SIGN_IN_START
  payload: { username: string, password: string }
}

export interface SetTokenAction {
  type: typeof AuthTypes.SET_TOKEN
  payload: { token: string }
}
