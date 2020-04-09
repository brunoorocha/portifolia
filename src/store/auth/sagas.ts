import { call, put } from 'redux-saga/effects'
import { SignInStartAction } from './types'
import { AuthUseCases } from '../../domain/use-cases/auth-use-cases'
import { signInEnd, setToken } from './actions'
import { Message } from '../../models/Message'
import { pushMessage } from '../message-center/actions'

export function* signIn (action: SignInStartAction) {
  try {
    const { username, password } = action.payload
    const useCases = new AuthUseCases()
    const response = yield call(useCases.signIn, { username, password })
    const token = response?.accessToken
    localStorage.setItem('access_token', token)

    yield put(setToken(token))
    yield put(signInEnd())
    yield put(pushMessage({ content: 'You signed in with success', type: 'success' }))
  }
  catch (error) {
    const message = error.response.data.message
    const errorMessage: Message = {
      content: message,
      type: 'error'
    }

    yield put(pushMessage(errorMessage))
    yield put(signInEnd())
  }
}

