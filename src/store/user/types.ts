import { CreateUserDTO } from '../../domain/dto/create-user-dto';

export enum UserActionTypes {
  CREATE_USER_START = '@user/CREATE_USER_START',
  CREATE_USER_END = '@user/CREATE_USER_END'
}

export interface UserState {
  isLoading: boolean
}

export interface CreateUserAction {
  type: typeof UserActionTypes.CREATE_USER_START
  payload: CreateUserDTO
}