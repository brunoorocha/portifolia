import { action } from 'typesafe-actions'
import { CreateUserDTO } from '../../domain/dto/create-user-dto'
import { UserActionTypes } from './types'

export const createUser = (createUserDTO: CreateUserDTO) => action(UserActionTypes.CREATE_USER_START, createUserDTO)

export const createUserEnd = () => action(UserActionTypes.CREATE_USER_END)
