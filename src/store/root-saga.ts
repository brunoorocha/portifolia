import { all, takeLatest } from 'redux-saga/effects'
import { AuthActionTypes } from './auth/types'
import { signIn, getAuthenticatedUserProfile } from './auth/sagas'
import { createUser } from './user/sagas'
import { UserActionTypes } from './user/types'

export default function* rootSaga () {
  return yield all([
    takeLatest(AuthActionTypes.SIGN_IN_START, signIn),
    takeLatest(AuthActionTypes.SET_TOKEN, getAuthenticatedUserProfile),

    takeLatest(UserActionTypes.CREATE_USER_START, createUser)
  ])
}
