import { put, call } from 'redux-saga/effects'
import { signIn } from '../auth/actions'
import { createUserEnd, setUserProfile, fetchUserWithUsernameEnd, setAuthenticatedUser, setProjectsForUser } from './actions'
import { CreateUserAction, FetchUserWithUsernameAction, FetchProjectsForUserAction } from './types'
import { Message } from '../../models/Message'
import { pushMessage } from '../message-center/actions'
import { UserUseCases } from '../../domain/use-cases/user-usecases'
import { SetTokenAction } from '../auth/types'
import jwtDecode from 'jwt-decode'

export function* createUser (action: CreateUserAction) {
  try {
    const { name, username, email, password } = action.payload
    const useCases = new UserUseCases()
    const response = yield call(useCases.createUser, { name, username, email, password })
    const user = response

    yield put(signIn(user.username, password))
    yield put(createUserEnd())
  }
  catch (error) {
    const message = error.response ? error.response.data.message : error.message
    const errorMessage: Message = { content: message, type: 'error' }

    yield put(pushMessage(errorMessage))
    yield put(createUserEnd())
  }
}

export function* fetchUserProfile (action: FetchUserWithUsernameAction) {
  try {
    const { username } = action.payload
    const useCases = new UserUseCases()
    const user = yield call(useCases.getProfile, username)
    yield put(setUserProfile(user))
  }
  catch (error) {
    const message = error.response ? error.response.data.message : error.message
    const errorMessage: Message = { content: message, type: 'error' }

    yield put(pushMessage(errorMessage))
  }
  finally {
    yield put(fetchUserWithUsernameEnd())
  }
}

export function* getAuthenticatedUserProfile (action: SetTokenAction) {
  try {
    const { token } = action.payload
    const decodedToken: any = jwtDecode(token)
    const userId = decodedToken.sub
    const useCases = new UserUseCases()
    const user = yield call(useCases.getProfile, userId)
    yield put(setAuthenticatedUser(user))
  }
  catch (error) {
    const message = error.response ? error.response.data.message : error.message
    const errorMessage: Message = { content: message, type: 'error' }

    yield put(pushMessage(errorMessage))
  }
}

export function* fetchProjectsForUser (action: FetchProjectsForUserAction) {
  try {
    const { userIdOrUsername } = action.payload
    const usecases = new UserUseCases()
    const projects = yield call(usecases.fetchProjectsForUser, userIdOrUsername)
    yield put(setProjectsForUser(projects))
  }
  catch (error) {
    const message = error.response ? error.response.data.message : error.message
    const errorMessage: Message = { content: message, type: 'error' }
    yield put(pushMessage(errorMessage))
  }
}
