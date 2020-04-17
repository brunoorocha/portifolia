import { CreateUserDTO } from '../../domain/dto/create-user-dto';
import { User } from '../../domain/entities/User';

export enum UserActionTypes {
  CREATE_USER_START = '@user/CREATE_USER_START',
  CREATE_USER_END = '@user/CREATE_USER_END',
  FETCH_USER_WITH_USERNAME = '@user/FETCH_USER_WITH_USERNAME',
  FETCH_USER_WITH_USERNAME_END = '@user/FETCH_USER_WITH_USERNAME_END',
  SET_USER_PROFILE = '@user/SET_USER_PROFILE',
}

export interface UserState {
  isCreateUserLoading: boolean
  isFetchUserLoading: boolean
  userProfile?: User
}

export interface CreateUserAction {
  type: typeof UserActionTypes.CREATE_USER_START
  payload: CreateUserDTO
}

export interface FetchUserWithUsernameAction {
  type: typeof UserActionTypes.FETCH_USER_WITH_USERNAME
  payload: { username: string }
}