import { Reducer } from 'redux'
import { MessageCenterState, MessageCenterTypes } from './types'

const INITIAL_STATE: MessageCenterState = {
  messages: []
}

export const reducer: Reducer<MessageCenterState> = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case MessageCenterTypes.PUSH_MESSAGE:
      return { ...state, messages: [...state.messages, actions.payload.message]}
    default:
      return state
  }
}
