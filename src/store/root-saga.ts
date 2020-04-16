import { all, takeLatest } from 'redux-saga/effects'
import { AuthActionTypes } from './auth/types'
import { UserActionTypes } from './user/types'
import { ProjectActionTypes } from './project/types'
import { signIn, getAuthenticatedUserProfile } from './auth/sagas'
import { fetchAllProjects, toggleProjectIsLiked, createProject } from './project/sagas'
import { startWatchEventsForUser } from './ws-event-watcher/sagas'
import { createUser } from './user/sagas'

export default function* rootSaga () {
  return yield all([
    takeLatest(AuthActionTypes.SIGN_IN_START, signIn),
    takeLatest(AuthActionTypes.SET_TOKEN, getAuthenticatedUserProfile),
    takeLatest(AuthActionTypes.SET_AUTHENTICATED_USER, startWatchEventsForUser),

    takeLatest(UserActionTypes.CREATE_USER_START, createUser),

    takeLatest(ProjectActionTypes.FETCH_ALL_START, fetchAllProjects),
    takeLatest(ProjectActionTypes.TOGGLE_PROJECT_IS_LIKED, toggleProjectIsLiked),
    takeLatest(ProjectActionTypes.CREATE_PROJECT, createProject),
  ])
}
