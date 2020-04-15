import { Project } from '../entities/Project'
import { DribbbreApiResources } from '../api-resources'
import { ApiService } from '../api-service'

export class ProjectUseCases {
  fetchAll = async (): Promise<Project[]> => {
    const { data } = await ApiService().get(DribbbreApiResources.projects)
    return data
  }

  likeProject = async (projectId: number): Promise<any> => {
    const { data } = await ApiService().post(DribbbreApiResources.projectLikes(projectId))
    return data
  }

  dislikeProject = async (projectId: number): Promise<any> => {
    const { data } = await ApiService().delete(DribbbreApiResources.projectLikes(projectId))
    return data
  }
}
