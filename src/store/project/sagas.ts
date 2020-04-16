import { put, call } from 'redux-saga/effects'
import { ProjectUseCases } from '../../domain/use-cases/project-usecases'
import { pushMessage } from '../message-center/actions'
import { Message } from '../../models/Message'
import { fetchAllProjectsEnd, setProjectsFeed, setSelectedProject, createProjectDidEnd } from './actions'
import { ToggleProjectIsLikedAction, CreateProjectAction } from './types'

export function* fetchAllProjects () {
  try {
    const projectUseCases = new ProjectUseCases()
    const projects = yield call(projectUseCases.fetchAll)
    yield put(setProjectsFeed(projects))
    yield put(fetchAllProjectsEnd())
  }
  catch (error) {
    const message = error.response ? error.response.data.message : error.message
    const errorMessage: Message = { content: message, type: 'error' }

    yield put(pushMessage(errorMessage))
    yield put(fetchAllProjectsEnd())
  }
}

export function* toggleProjectIsLiked (action: ToggleProjectIsLikedAction) {
  try {
    const { project } = action.payload
    const projectUseCases = new ProjectUseCases()
    if (!project.isLiked) {
      yield call(projectUseCases.dislikeProject, project.id)
      return
    }

    yield call(projectUseCases.likeProject, project.id)
  }
  catch (error) {
    const message = error.response ? error.response.data.message : error.message
    const errorMessage: Message = { content: message, type: 'error' }
    yield put(pushMessage(errorMessage))
  }
}

export function* createProject (action: CreateProjectAction) {
  try {
    const { createProjectDTO } = action.payload
    const projectUseCases = new ProjectUseCases()
    const createdProject = yield call(projectUseCases.createProject, createProjectDTO)
    yield put(setSelectedProject(createdProject))
  }
  catch (error) {
    const message = error.response ? error.response.data.message : error.message
    const errorMessage: Message = { content: message, type: 'error' }
    yield put(pushMessage(errorMessage))
  }
  finally {
    yield put(createProjectDidEnd())
  }
}
