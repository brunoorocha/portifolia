import { User } from '../entities/User'
import { DribbbreApiResources } from '../api-resources'
import { ApiService, getAuthorizationHeader } from '../api-service'

export class UserUseCases {
  getProfile = async (id: number): Promise<User> => {
    const { data } = await ApiService.get(DribbbreApiResources.profile(id), { headers: getAuthorizationHeader() })
    return data
  }
}
