import { Project } from '../../domain/entities/Project'
import { CreateProjectDTO } from '../../domain/dto/create-project-dto';

export enum ProjectActionTypes {
  FETCH_ALL_START = '@project/FETCH_ALL_START',
  FETCH_ALL_END = '@project/FETCH_ALL_END',
  SET_PROJECTS_FEED = '@project/SET_PROJECTS_FEED',
  TOGGLE_PROJECT_IS_LIKED = '@project/TOGGLE_PROJECT_IS_LIKED',
  CREATE_PROJECT = '@project/CREATE_PROJECT',
  CREATE_PROJECT_END = '@project/CREATE_PROJECT_END',
  SET_SELECTED_PROJECT = '@project/SET_SELECTED_PROJECT',
  SET_CREATED_PROJECT = '@project/SET_CREATED_PROJECT',
  FETCH_PROJECT_WITH_ID = '@project/FETCH_PROJECT_WITH_ID',
  FETCH_PROJECT_END = '@project/FETCH_PROJECT_END',
}

export interface ProjectState {
  isFetchingAll: boolean
  isFetchingProject: boolean
  isCreatingProject: boolean
  projectsFeed: Project[]
  selectedProject?: Project
  createdProject?: Project
}

export interface ToggleProjectIsLikedAction {
  type: typeof ProjectActionTypes.TOGGLE_PROJECT_IS_LIKED
  payload: { project: Project }
}

export interface CreateProjectAction {
  type: typeof ProjectActionTypes.CREATE_PROJECT
  payload: { createProjectDTO: CreateProjectDTO }
}

export interface FetchProjectWithIdAction {
  type: typeof ProjectActionTypes.CREATE_PROJECT
  payload: { projectId: number }
}
