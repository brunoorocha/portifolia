import { ProjectState, ProjectActionTypes } from './types'
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
    default:
      return state
  }
}
