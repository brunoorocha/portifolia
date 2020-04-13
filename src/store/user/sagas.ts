import { put, call } from 'redux-saga/effects'
import { signIn } from '../auth/actions'
import { createUserEnd } from './actions'
import { CreateUserAction } from './types'
import { Message } from '../../models/Message'
import { pushMessage } from '../message-center/actions'
import { UserUseCases } from '../../domain/use-cases/user-usecases'

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