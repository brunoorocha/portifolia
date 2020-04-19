import { CreateUserDTO } from '../../domain/dto/create-user-dto';
import { User } from '../../domain/entities/User';

export enum UserActionTypes {
  CREATE_USER_START = '@user/CREATE_USER_START',
  CREATE_USER_END = '@user/CREATE_USER_END',
  FETCH_USER_WITH_USERNAME = '@user/FETCH_USER_WITH_USERNAME',
  FETCH_USER_WITH_USERNAME_END = '@user/FETCH_USER_WITH_USERNAME_END',
  SET_USER_PROFILE = '@user/SET_USER_PROFILE',
  SET_AUTHENTICATED_USER = '@user/SET_AUTHENTICATED_USER',
  SET_AUTHENTICATED_USER_PROFILE_IMAGE = '@user/SET_AUTHENTICATED_USER_PROFILE_IMAGE',
}

export interface UserState {
  isCreateUserLoading: boolean
  isFetchUserLoading: boolean
  userProfile?: User
  authenticatedUser?: User
}

export interface CreateUserAction {
  type: typeof UserActionTypes.CREATE_USER_START
  payload: CreateUserDTO
}

export interface FetchUserWithUsernameAction {
  type: typeof UserActionTypes.FETCH_USER_WITH_USERNAME
  payload: { username: string }
}

export interface SetAuthenticatedUserAction {
  type: typeof UserActionTypes.SET_AUTHENTICATED_USER
  payload: { user?: User }
}
