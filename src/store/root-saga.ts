import { all, takeLatest } from 'redux-saga/effects'
import { AuthTypes } from './auth/types'
import { signIn, getAuthenticatedUserProfile } from './auth/sagas'

export default function* rootSaga () {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_START, signIn),
    takeLatest(AuthTypes.SET_TOKEN, getAuthenticatedUserProfile)
  ])
}
