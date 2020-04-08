
export enum AuthTypes {
  SIGN_IN_START = '@auth/SIGN_IN_START',
  SIGN_IN_END = '@auth/SIGN_IN_END',
  SET_TOKEN = '@auth/SET_TOKEN',
}

export interface AuthState {
  readonly token?: string
  readonly isLoading: boolean
}
