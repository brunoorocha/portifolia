import { User } from '../entities/User'
import { DribbbreApiResources } from '../api-resources'
import { ApiService, getAuthorizationHeader } from '../api-service'
import { CreateUserDTO } from '../dto/create-user-dto'

export class UserUseCases {
  getProfile = async (id: number): Promise<User> => {
    const { data } = await ApiService.get(DribbbreApiResources.profile(id), { headers: getAuthorizationHeader() })
    return data
  }

  createUser = async (createUserDTO: CreateUserDTO): Promise<any> => {
    const { data } = await ApiService.post(DribbbreApiResources.createUser, createUserDTO)
    return data
  }
}
