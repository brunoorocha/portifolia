import { AuthState } from "../auth/types"
import { MessageCenterState } from "../message-center/types";

export interface AppState {
  auth: AuthState
  messageCenter: MessageCenterState
}
