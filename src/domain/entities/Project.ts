
export interface Project {
  id: number
  title: string
  description: string
  imageUrl: string
  likesCount: number
  isLiked?: boolean
  user: {
    username: string
  }
}
