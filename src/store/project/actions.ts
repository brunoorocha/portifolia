import { action } from 'typesafe-actions'
import { ProjectActionTypes } from './types'
import { Project } from '../../domain/entities/Project'

export const fetchAllProjects = () => action(ProjectActionTypes.FETCH_ALL_START)

export const fetchAllProjectsEnd = () => action(ProjectActionTypes.FETCH_ALL_END)

export const setProjectsFeed = (projects: Project[]) => action(ProjectActionTypes.SET_PROJECTS_FEED, { projects })

export const toggleProjectIsLiked = (project: Project) => action(ProjectActionTypes.TOGGLE_PROJECT_IS_LIKED, { project })
