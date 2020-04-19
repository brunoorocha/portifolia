import { all, takeLatest } from 'redux-saga/effects'
import { AuthActionTypes } from './auth/types'
import { UserActionTypes } from './user/types'
import { ProjectActionTypes } from './project/types'
import { signIn } from './auth/sagas'
import { fetchAllProjects, toggleProjectIsLiked, createProject, fetchProjectWithId } from './project/sagas'
import { startWatchEventsForUser } from './ws-event-watcher/sagas'
import { createUser, fetchUserProfile, getAuthenticatedUserProfile } from './user/sagas'

export default function* rootSaga () {
  return yield all([
    takeLatest(AuthActionTypes.SIGN_IN_START, signIn),
    takeLatest(AuthActionTypes.SET_TOKEN, getAuthenticatedUserProfile),
    
    takeLatest(UserActionTypes.CREATE_USER_START, createUser),
    takeLatest(UserActionTypes.FETCH_USER_WITH_USERNAME, fetchUserProfile),
    takeLatest(UserActionTypes.SET_AUTHENTICATED_USER, startWatchEventsForUser),

    takeLatest(ProjectActionTypes.FETCH_ALL_START, fetchAllProjects),
    takeLatest(ProjectActionTypes.TOGGLE_PROJECT_IS_LIKED, toggleProjectIsLiked),
    takeLatest(ProjectActionTypes.CREATE_PROJECT, createProject),
    takeLatest(ProjectActionTypes.FETCH_PROJECT_WITH_ID, fetchProjectWithId),
  ])
}
