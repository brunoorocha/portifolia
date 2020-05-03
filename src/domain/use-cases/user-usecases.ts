import { User } from '../entities/User'
import { DribbbreApiResources } from '../api-resources'
import { ApiService, getAuthorizationHeader } from '../api-service'
import { CreateUserDTO } from '../dto/create-user-dto'
import { Project } from '../entities/Project'

export class UserUseCases {
  private headers: any = {
    ...getAuthorizationHeader()
  }

  getProfile = async (idOrUsername: number | string): Promise<User> => {
    const { data } = await ApiService.get(DribbbreApiResources.profile(idOrUsername), { headers: this.headers })
    return data
  }

  createUser = async (createUserDTO: CreateUserDTO): Promise<any> => {
    const { data } = await ApiService.post(DribbbreApiResources.createUser, createUserDTO)
    return data
  }

  fetchProjectsForUser = async (userIdOrUsername: number | string): Promise<Project[]> => {
    const { data } = await ApiService.get(DribbbreApiResources.projectsForUser(userIdOrUsername), { headers: this.headers })
    return data
  }

  fetchLikedProjectsForUser = async (userIdOrUsername: number | string): Promise<Project[]> => {
    const { data } = await ApiService.get(DribbbreApiResources.likedProjectsForUser(userIdOrUsername), { headers: this.headers })
    return data
  }
}
