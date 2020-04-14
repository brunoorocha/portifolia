import { AuthState } from "../auth/types"
import { MessageCenterState } from "../message-center/types";
import { UserState } from "../user/types";
import { ProjectState } from "../project/types";

export interface AppState {
  auth: AuthState
  user: UserState
  project: ProjectState
  messageCenter: MessageCenterState
}
