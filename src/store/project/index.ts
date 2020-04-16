import { ProjectState, ProjectActionTypes, ToggleProjectIsLikedAction } from './types'
import { Reducer } from 'redux'

const INITIAL_STATE: ProjectState = {
  isFetchingAll: false,
  isCreatingProject: false,
  projectsFeed: []
}

export const reducer: Reducer<ProjectState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProjectActionTypes.FETCH_ALL_START:
      return { ...state, isFetchingAll: true }
    case ProjectActionTypes.FETCH_ALL_END:
      return { ...state, isFetchingAll: false }
    case ProjectActionTypes.SET_PROJECTS_FEED:
      return { ...state, projectsFeed: action.payload.projects }
    case ProjectActionTypes.TOGGLE_PROJECT_IS_LIKED:
      const { project } = (action as ToggleProjectIsLikedAction).payload
      const projectsFeed = state.projectsFeed.map(p => {
        if (p.id === project.id) {
          p.isLiked = !p.isLiked
          p.likesCount += p.isLiked ? 1 : -1
        }

        return p
      })

      return { ...state, projectsFeed }
    case ProjectActionTypes.CREATE_PROJECT:
      return { ...state, isCreatingProject: true }
    case ProjectActionTypes.CREATE_PROJECT_END:
      return { ...state, isCreatingProject: false }
    case ProjectActionTypes.SET_SELECTED_PROJECT:
      return { ...state, selectedProject: action.payload.project }
    default:
      return state
  }
}
