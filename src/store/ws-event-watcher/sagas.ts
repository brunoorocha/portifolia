import { eventChannel, END } from 'redux-saga'
import { call, putResolve, take, put } from 'redux-saga/effects'
import SocketIOClient from 'socket.io-client'
import { connectionSuccess } from './actions'
import { pushMessage, pushNotification } from '../message-center/actions'
import { Message } from '../../models/Message'
import { Notification } from '../../models/Notification'
import { SetAuthenticatedUserAction } from '../user/types'

function createSocketConnection () {
  return new Promise((resolve, reject) => {
    const socket = SocketIOClient('http://localhost:5001')

    socket.on('connect', () => {
      resolve(socket)
    })

    socket.on('disconnect', () => {
      reject()
    })
  })
}

function createSocketChannel (socket: SocketIOClient.Socket, userId: number) {
  return eventChannel(emit => {
    socket.on(`notifications:user:${userId}`, (event: any) => {
      const notification: Notification = { title: 'Notification', message: event.message }
      emit(pushNotification(notification))
    })

    socket.on('disconnect', () => {
      const message: Message = { type: 'info', content: 'You lose your connection.' }
      emit(pushMessage(message))
      emit(END)
    })

    return () => {
      socket.close()
    }
  })
}

export function* startWatchEventsForUser (action: SetAuthenticatedUserAction) {
  const { user } = action.payload
  if (!user) { return }

  try {
    let socket = yield call(createSocketConnection)
    let socketChannel = yield call(createSocketChannel, socket, user.id)
    yield putResolve(connectionSuccess())

    while (true) {
      const action = yield take(socketChannel)
      yield put(action)
    }
  }
  catch (error) {
    const message = error.message
    const errorMessage: Message = { content: message, type: 'error' }
    yield put(pushMessage(errorMessage))
  }
}
