import { Project } from '../../domain/entities/Project'

export enum ProjectActionTypes {
  FETCH_ALL_START = '@project/FETCH_ALL_START',
  FETCH_ALL_END = '@project/FETCH_ALL_END',
  SET_PROJECTS_FEED = '@project/SET_PROJECTS_FEED',
}

export interface ProjectState {
  isFetchingAll: boolean
  projectsFeed: Project[]
}
