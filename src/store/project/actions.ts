import { action } from 'typesafe-actions'
import { ProjectActionTypes } from './types'
import { Project } from '../../domain/entities/Project'
import { CreateProjectDTO } from '../../domain/dto/create-project-dto'

export const fetchAllProjects = () => action(ProjectActionTypes.FETCH_ALL_START)

export const fetchAllProjectsEnd = () => action(ProjectActionTypes.FETCH_ALL_END)

export const setProjectsFeed = (projects: Project[]) => action(ProjectActionTypes.SET_PROJECTS_FEED, { projects })

export const toggleProjectIsLiked = (project: Project) => action(ProjectActionTypes.TOGGLE_PROJECT_IS_LIKED, { project })

export const createProject = (createProjectDTO: CreateProjectDTO) => action(ProjectActionTypes.CREATE_PROJECT, { createProjectDTO })

export const createProjectDidEnd = () => action(ProjectActionTypes.CREATE_PROJECT_END)

export const setSelectedProject = (project?: Project) => action(ProjectActionTypes.SET_SELECTED_PROJECT, { project })

export const setCreatedProject = (project?: Project) => action(ProjectActionTypes.SET_CREATED_PROJECT, { project })

export const fetchProjectWithId = (projectId: number) => action(ProjectActionTypes.FETCH_PROJECT_WITH_ID, { projectId })

export const fetchProjectEnd = () => action(ProjectActionTypes.FETCH_PROJECT_END)
