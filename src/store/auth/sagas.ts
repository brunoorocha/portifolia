import { call, put } from 'redux-saga/effects'
import { SignInStartAction } from './types'
import { AuthUseCases } from '../../domain/use-cases/auth-use-cases'
import { signInEnd, setToken } from './actions'

export function* signIn (action: SignInStartAction) {
  try {
    const { username, password } = action.payload
    const useCases = new AuthUseCases()
    const response = yield call(useCases.signIn, { username, password })
    const token = response?.accessToken
    localStorage.setItem('access_token', token)

    yield put(setToken(token))
    yield put(signInEnd())
  }
  catch (error) {
    yield put(signInEnd())
  }
}

