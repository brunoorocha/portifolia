import { put, call } from 'redux-saga/effects'
import { ProjectUseCases } from '../../domain/use-cases/project-usecases'
import { pushMessage } from '../message-center/actions'
import { Message } from '../../models/Message'
import { fetchAllProjectsEnd, setProjectsFeed } from './actions'

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
