import { ProjectState, ProjectActionTypes, ToggleProjectIsLikedAction } from './types'
import { Reducer } from 'redux'

const INITIAL_STATE: ProjectState = {
  isFetchingAll: false,
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
      const projectId = (action as ToggleProjectIsLikedAction).payload.projectId
      const projectsFeed = state.projectsFeed.map(p => {
        if (p.id === projectId) {
          p.isLiked = !p.isLiked
          p.likesCount += p.isLiked ? 1 : -1
        }

        return p
      })

      return { ...state, projectsFeed }
    default:
      return state
  }
}
