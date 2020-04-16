
import { Reducer } from 'redux'
import { WSEventWatcherState } from './types'

const INITIAL_STATE: WSEventWatcherState = {}

export const reducer: Reducer<WSEventWatcherState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

