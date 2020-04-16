import { eventChannel, END } from 'redux-saga'
import { call, putResolve, take, put } from 'redux-saga/effects'
import SocketIOClient from 'socket.io-client'
import { connectionSuccess } from './actions'
import { pushMessage } from '../message-center/actions'
import { Message } from '../../models/Message'
import { SetAuthenticatedUserAction } from '../auth/types'

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
    socket.on('handshake', (event: any) => {
      emit(event)
    })

    socket.on(`notifications:user:${userId}`, (event: any) => {
      emit(event)
    })

    socket.on('disconnect', () => {
      emit(END)
    })

    return () => {
      socket.close()
    }
  })
}

export function* startWatchEventsForUser (action: SetAuthenticatedUserAction) {
  const { user } = action.payload
  try {
    let socket = yield call(createSocketConnection)
    let socketChannel = yield call(createSocketChannel, socket, user.id)
    yield putResolve(connectionSuccess())

    while (true) {
      const event = yield take(socketChannel)
      // yield putResolve()
    }
  }
  catch (error) {
    const message = error.message
    const errorMessage: Message = { content: message, type: 'error' }
    yield put(pushMessage(errorMessage))
  }
}
