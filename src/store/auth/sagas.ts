import { call, put } from 'redux-saga/effects'
import jwtDecode from 'jwt-decode'
import { SignInStartAction, SetTokenAction } from './types'
import { AuthUseCases } from '../../domain/use-cases/auth-usecases'
import { signInEnd, setToken, setAuthenticatedUser } from './actions'
import { Message } from '../../models/Message'
import { pushMessage } from '../message-center/actions'
import { tokenKey } from '../../domain/api-service'
import { UserUseCases } from '../../domain/use-cases/user-usecases'

export function* signIn (action: SignInStartAction) {
  try {
    const { username, password } = action.payload
    const useCases = new AuthUseCases()
    const response = yield call(useCases.signIn, { username, password })
    const token = response?.accessToken
    localStorage.setItem(tokenKey, token)

    yield put(setToken(token))
    yield put(signInEnd())
    yield put(pushMessage({ content: 'You signed in with success', type: 'success' }))
  }
  catch (error) {
    const message = error.response ? error.response.data.message : error.message
    const errorMessage: Message = { content: message, type: 'error' }

    yield put(pushMessage(errorMessage))
    yield put(signInEnd())
  }
}

export function* getAuthenticatedUserProfile (action: SetTokenAction) {
  try {
    const { token } = action.payload
    const decodedToken = jwtDecode(token)
    const userId = (decodedToken as any).sub
    const useCases = new UserUseCases()
    const user = yield call(useCases.getProfile, userId)
    yield put(setAuthenticatedUser(user))
  }
  catch (error) {
    const message = error.response ? error.response.data.message : error.message
    const errorMessage: Message = { content: message, type: 'error' }

    yield put(pushMessage(errorMessage))
    yield put(signInEnd())
  }
}
