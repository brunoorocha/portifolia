import { action } from 'typesafe-actions'
import { Message } from '../../models/Message'
import { MessageCenterTypes } from './types'

export const pushMessage = (message: Message) => action(MessageCenterTypes.PUSH_MESSAGE, { message })
