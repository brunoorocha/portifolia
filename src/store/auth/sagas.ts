import { call, put } from 'redux-saga/effects'
import { SignInStartAction, SocialSignInStartAction } from './types'
import { AuthUseCases } from '../../domain/use-cases/auth-usecases'
import { signInEnd, setToken, facebookSignInEnd } from './actions'
import { Message } from '../../models/Message'
import { pushMessage } from '../message-center/actions'
import { tokenKey } from '../../domain/api-service'

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

export function* facebookSignIn (action: SocialSignInStartAction) {
  try {
    const { accessToken } = action.payload
    const useCases = new AuthUseCases()
    const response = yield call(useCases.facebookSignIn, accessToken)
    const token = response?.accessToken
    localStorage.setItem(tokenKey, token)

    yield put(setToken(token))
    yield put(facebookSignInEnd())
    yield put(pushMessage({ content: 'You signed in with success', type: 'success' }))
  }
  catch (error) {
    const message = error.response ? error.response.data.message : error.message
    const errorMessage: Message = { content: message, type: 'error' }

    yield put(pushMessage(errorMessage))
    yield put(facebookSignInEnd())
  }
}

export function* googleSignIn (action: SocialSignInStartAction) {
  try {
    const { accessToken } = action.payload
    const useCases = new AuthUseCases()
    const response = yield call(useCases.googleSignIn, accessToken)
    const token = response?.accessToken
    localStorage.setItem(tokenKey, token)

    yield put(setToken(token))
    yield put(facebookSignInEnd())
    yield put(pushMessage({ content: 'You signed in with success', type: 'success' }))
  }
  catch (error) {
    const message = error.response ? error.response.data.message : error.message
    const errorMessage: Message = { content: message, type: 'error' }

    yield put(pushMessage(errorMessage))
    yield put(facebookSignInEnd())
  }
}
