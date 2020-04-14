import { Project } from '../entities/Project'
import { DribbbreApiResources } from '../api-resources'
import { ApiService } from '../api-service'

export class ProjectUseCases {
  fetchAll = async (): Promise<Project[]> => {
    const { data } = await ApiService.get(DribbbreApiResources.projects)
    return data
  }
}
