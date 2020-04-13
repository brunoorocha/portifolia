import { AuthState } from "../auth/types"
import { MessageCenterState } from "../message-center/types";
import { UserState } from "../user/types";

export interface AppState {
  auth: AuthState
  user: UserState
  messageCenter: MessageCenterState
}
