import { ApiService } from "../api-service"
import { DribbbreApiResources } from "../api-resources"
import { CreateUserDTO } from "../dto/create-user-dto"
import { SignInDTO } from "../dto/sign-in-dto"

export class AuthUseCases {
  signIn = async (credentials: SignInDTO): Promise<any> => {
    const { data } = await ApiService.post(DribbbreApiResources.auth, credentials)
    return data
  }

  signUp = async (createUserDTO: CreateUserDTO): Promise<any> => {
    const { data } = await ApiService.post(DribbbreApiResources.createUser, createUserDTO)
    return data
  }
}
