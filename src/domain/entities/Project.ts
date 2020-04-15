
export interface Project {
  id: number
  title: string
  imageUrl: string
  likesCount: number
  isLiked?: boolean
  user: {
    username: string
  }
}
