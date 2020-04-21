import { action } from 'typesafe-actions'
import { CreateUserDTO } from '../../domain/dto/create-user-dto'
import { UserActionTypes } from './types'
import { User } from '../../domain/entities/User'
import { Project } from '../../domain/entities/Project'

export const createUser = (createUserDTO: CreateUserDTO) => action(UserActionTypes.CREATE_USER_START, createUserDTO)

export const createUserEnd = () => action(UserActionTypes.CREATE_USER_END)

export const fetchUserWithUsername = (username: string) => action(UserActionTypes.FETCH_USER_WITH_USERNAME, { username })

export const fetchUserWithUsernameEnd = () => action(UserActionTypes.FETCH_USER_WITH_USERNAME_END)

export const setUserProfile = (user: User) => action(UserActionTypes.SET_USER_PROFILE, { user })

export const setAuthenticatedUser = (user?: User) => action(UserActionTypes.SET_AUTHENTICATED_USER, { user })

export const setAuthenticatedUserProfileImage = (profileImageUrl?: string) => action(UserActionTypes.SET_AUTHENTICATED_USER_PROFILE_IMAGE, { profileImageUrl })

export const fetchProjectsForUser = (userIdOrUsername: number | string) => action(UserActionTypes.FETCH_PROJECTS_FOR_USER, { userIdOrUsername })

export const fetchProjectsForUserEnd = () => action(UserActionTypes.FETCH_PROJECTS_FOR_USER_END)

export const setProjectsForUser = (projects: Project[]) => action(UserActionTypes.SET_PROJECTS_OF_USER, { projects })
