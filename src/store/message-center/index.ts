import { Reducer } from 'redux'
import { MessageCenterState, MessageCenterTypes } from './types'

const INITIAL_STATE: MessageCenterState = {
  messages: [],
  notifications: []
}

export const reducer: Reducer<MessageCenterState> = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case MessageCenterTypes.PUSH_MESSAGE:
      return { ...state, messages: [...state.messages, actions.payload.message]}
    case MessageCenterTypes.PUSH_NOTIFICATION:
      return { ...state, notifications: [...state.notifications, actions.payload.notification]}
    default:
      return state
  }
}
