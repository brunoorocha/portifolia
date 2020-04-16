import { action } from 'typesafe-actions'
import { Message } from '../../models/Message'
import { MessageCenterTypes } from './types'
import { Notification } from '../../models/Notification'

export const pushMessage = (message: Message) => action(MessageCenterTypes.PUSH_MESSAGE, { message })

export const pushNotification = (notification: Notification) => action(MessageCenterTypes.PUSH_NOTIFICATION, { notification })
