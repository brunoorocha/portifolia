import { ApiService } from "../api-service"
import { DribbbreApiResources } from "../api-resources"
import { SignInDTO } from "../dto/sign-in-dto"

export class AuthUseCases {
  signIn = async (credentials: SignInDTO): Promise<any> => {
    const { data } = await ApiService.post(DribbbreApiResources.auth, credentials)
    return data
  }
  
  facebookSignIn = async (accessToken: string): Promise<any> => {
    const headers = {
      Authorization: `Bearer ${accessToken}`
    }

    const { data } = await ApiService.get(DribbbreApiResources.facebookAuth, { headers })
    return data
  }
  
  googleSignIn = async (accessToken: string): Promise<any> => {
    const { data } = await ApiService.get(DribbbreApiResources.googleAuth(accessToken))
    return data
  }
}
