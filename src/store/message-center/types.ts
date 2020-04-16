import { Message } from '../../models/Message'
import { Notification } from '../../models/Notification'

export enum MessageCenterTypes {
  PUSH_MESSAGE = '@messageCenter/PUSH_MESSAGE',
  PUSH_NOTIFICATION = '@messageCenter/PUSH_NOTIFICATION'
}

export interface MessageCenterState {
  readonly messages: Message[]
  readonly notifications: Notification[]
}
