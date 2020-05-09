
export const DribbbreApiResources = {
  baseURL: process.env.REACT_APP_API_URL,

  auth: '/auth',
  facebookAuth: '/auth/facebook',
  googleAuth: (accessToken: string) => `/auth/google?access_token=${accessToken}`,

  createUser: '/users',
  profile: (userIdOrUsername: number | string) => `/users/${userIdOrUsername}`,
  projectsForUser: (userIdOrUsername: number | string) => `/users/${userIdOrUsername}/projects`,
  likedProjectsForUser: (userIdOrUsername: number | string) => `/users/${userIdOrUsername}/liked-projects`,
  changeProfileImage: (userId: number | string) => `/users/${userId}/profile-image`,

  projects: '/projects',
  project: (projectId: number) => `/projects/${projectId}`,
  projectLikes: (projectId: number) => `/projects/${projectId}/likes`,
}
