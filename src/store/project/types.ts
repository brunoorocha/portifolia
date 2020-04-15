import { Project } from '../../domain/entities/Project'

export enum ProjectActionTypes {
  FETCH_ALL_START = '@project/FETCH_ALL_START',
  FETCH_ALL_END = '@project/FETCH_ALL_END',
  SET_PROJECTS_FEED = '@project/SET_PROJECTS_FEED',
  TOGGLE_PROJECT_IS_LIKED = '@project/TOGGLE_PROJECT_IS_LIKED',
}

export interface ProjectState {
  isFetchingAll: boolean
  projectsFeed: Project[]
}

export interface ToggleProjectIsLikedAction {
  type: typeof ProjectActionTypes.TOGGLE_PROJECT_IS_LIKED
  payload: { projectId: number }
}
