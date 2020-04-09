import { ApiService } from "../api-service"
import { DribbbreApiResources } from "../api-resources"

export class AuthUseCases {
  signIn = async (credentials: { username: string, password: string }): Promise<any> => {
    const { data } = await ApiService.post(DribbbreApiResources.auth, credentials)
    return data
  }
}
