import { Reducer } from 'redux'
import { UserState, UserActionTypes } from './types'

const INITIAL_STATE: UserState = {
  isCreateUserLoading: false,
  isFetchingUserProjects: false,
  isFetchingUserLikedProjects: false,
  isFetchUserLoading: false
}

export const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.CREATE_USER_START:
      return { ...state, isCreateUserLoading: true }
    case UserActionTypes.CREATE_USER_END:
      return { ...state, isCreateUserLoading: false }
    case UserActionTypes.FETCH_USER_WITH_USERNAME:
      return { ...state, isFetchUserLoading: true }
    case UserActionTypes.FETCH_USER_WITH_USERNAME_END:
      return { ...state, isFetchUserLoading: false }
    case UserActionTypes.SET_USER_PROFILE:
      return { ...state, userProfile: { ...action.payload.user }}
    case UserActionTypes.SET_AUTHENTICATED_USER:
      return { ...state, authenticatedUser: action.payload.user }
    case UserActionTypes.SET_AUTHENTICATED_USER_PROFILE_IMAGE:
      return { ...state, authenticatedUser: { ...state.authenticatedUser, profileImage: action.payload.profileImageUrl }}
    case UserActionTypes.FETCH_PROJECTS_FOR_USER:
      return { ...state,isFetchingUserProjects: true }
    case UserActionTypes.FETCH_PROJECTS_FOR_USER_END:
      return { ...state,isFetchingUserProjects: false }
    case UserActionTypes.SET_PROJECTS_OF_USER:
      return { ...state, userProfile: { ...state.userProfile, projects: action.payload.projects }}
    case UserActionTypes.FETCH_LIKED_PROJECTS_FOR_USER:
      return { ...state,isFetchingUserLikedProjects: true }
    case UserActionTypes.FETCH_LIKED_PROJECTS_FOR_USER_END:
      return { ...state,isFetchingUserLikedProjects: false }
    case UserActionTypes.SET_LIKED_PROJECTS_OF_USER:
      return { ...state, userProfile: { ...state.userProfile, likedProjects: action.payload.projects }}
    default:
      return state
  }
}
