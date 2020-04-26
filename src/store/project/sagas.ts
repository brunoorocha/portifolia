import { put, call } from 'redux-saga/effects'
import { ProjectUseCases } from '../../domain/use-cases/project-usecases'
import { pushMessage } from '../message-center/actions'
import { Message } from '../../models/Message'
import { fetchAllProjectsEnd, setProjectsFeed, setCreatedProject, createProjectDidEnd, fetchProjectEnd, setSelectedProject } from './actions'
import { ToggleProjectIsLikedAction, CreateProjectAction, FetchProjectWithIdAction } from './types'

export function* fetchAllProjects () {
  try {
    const projectUseCases = new ProjectUseCases()
    const projects = yield call(projectUseCases.fetchAll)
    yield put(setProjectsFeed(projects))
    yield put(fetchAllProjectsEnd())
  }
  catch (error) {
    yield call(pushErrorMessage, error)
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
    yield call(pushErrorMessage, error)
  }
}

export function* createProject (action: CreateProjectAction) {
  try {
    const { createProjectDTO } = action.payload
    const projectUseCases = new ProjectUseCases()
    const createdProject = yield call(projectUseCases.createProject, createProjectDTO)
    yield put(setCreatedProject(createdProject))
  }
  catch (error) {
    yield call(pushErrorMessage, error)
  }
  finally {
    yield put(createProjectDidEnd())
  }
}

export function* fetchProjectWithId (action: FetchProjectWithIdAction) {
  try {
    yield put(setSelectedProject())
    const { projectId } = action.payload
    const projectUseCases = new ProjectUseCases()
    const project = yield call(projectUseCases.fetchProjectWithId, projectId)
    yield put(setSelectedProject(project))
  }
  catch (error) {
    yield call(pushErrorMessage, error)
  }
  finally {
    yield put(fetchProjectEnd())
  }
}

function* pushErrorMessage (error: any) {
  const message = error.response ? error.response.data.message : error.message
  const errorMessage: Message = { content: message, type: 'error' }
  yield put(pushMessage(errorMessage))
}
