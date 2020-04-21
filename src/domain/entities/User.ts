import { Project } from './Project'

export interface User {
  readonly id: number
  readonly name: string
  readonly username: string
  readonly email: string
  readonly profileImage?: string
  readonly projects?: Project[]
  readonly projectsCount: number
  readonly likedProjects?: Project[]
  readonly likedCount: number
}