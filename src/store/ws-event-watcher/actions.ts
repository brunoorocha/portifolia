import { action } from 'typesafe-actions'
import { WSEventWatcherActionTypes } from './types'

export const connect = () => action(WSEventWatcherActionTypes.CONNECT)

export const connectionSuccess = () => action(WSEventWatcherActionTypes.CONNECTION_SUCCESS)

export const disconnect = () => action(WSEventWatcherActionTypes.DISCONNECT)

