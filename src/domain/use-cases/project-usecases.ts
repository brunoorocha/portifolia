import { Project } from '../entities/Project'
import { DribbbreApiResources } from '../api-resources'
import { ApiService } from '../api-service'
import { CreateProjectDTO } from '../dto/create-project-dto'

export class ProjectUseCases {
  fetchAll = async (): Promise<Project[]> => {
    const { data } = await ApiService().get(DribbbreApiResources.projects)
    return data
  }

  createProject = async (createProjectDTO: CreateProjectDTO): Promise<Project[]> => {
    const formData = new FormData()
    formData.append('title', createProjectDTO.title)
    formData.append('description', createProjectDTO.description)
    formData.append('image', createProjectDTO.image)

    const { data } = await ApiService().post(DribbbreApiResources.projects, formData, { headers: { 'Content-type': 'multipart/form-data' }})
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
