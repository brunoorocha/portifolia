import { Project } from './Project'

export interface User {
  readonly id: number
  readonly name: string
  readonly username: string
  readonly email: string
  readonly profileImage?: string
  readonly projects?: Project[]
  readonly likedCount?: number
}