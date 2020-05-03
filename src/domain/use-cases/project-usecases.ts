import { Project } from '../entities/Project'
import { DribbbreApiResources } from '../api-resources'
import { ApiService, getAuthorizationHeader } from '../api-service'
import { CreateProjectDTO } from '../dto/create-project-dto'

export class ProjectUseCases {
  private headers: any = {
    ...getAuthorizationHeader()
  }

  fetchAll = async (): Promise<Project[]> => {
    const { data } = await ApiService.get(DribbbreApiResources.projects, { headers: this.headers })
    return data
  }

  createProject = async (createProjectDTO: CreateProjectDTO): Promise<Project[]> => {
    const formData = new FormData()
    formData.append('title', createProjectDTO.title)
    formData.append('description', createProjectDTO.description)
    formData.append('image', createProjectDTO.image)

    const headers = {
      ...this.headers,
      'Content-type': 'multipart/form-data',
    }

    const { data } = await ApiService.post(DribbbreApiResources.projects, formData, { headers })
    return data
  }

  fetchProjectWithId = async (projectId: number): Promise<Project> => {
    const { data } = await ApiService.get(DribbbreApiResources.project(projectId), { headers: this.headers })
    return data
  }

  likeProject = async (projectId: number): Promise<any> => {
    const { data } = await ApiService.post(DribbbreApiResources.projectLikes(projectId), { headers: this.headers })
    return data
  }

  dislikeProject = async (projectId: number): Promise<any> => {
    const { data } = await ApiService.delete(DribbbreApiResources.projectLikes(projectId), { headers: this.headers })
    return data
  }
}
