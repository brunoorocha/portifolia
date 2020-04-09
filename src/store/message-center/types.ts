import { Message } from "../../models/Message";

export enum MessageCenterTypes {
  PUSH_MESSAGE = '@messageCenter/PUSH_MESSAGE'
}

export interface MessageCenterState {
  readonly messages: Message[]
}
