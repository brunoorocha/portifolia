
export const DribbbreApiResources = {
  baseURL: 'http://localhost:5000',

  auth: '/auth',
  createUser: '/users',
  profile: (userIdOrUsername: number | string) => `/users/${userIdOrUsername}`,
  changeProfileImage: (userId: number | string) => `/users/${userId}/profile-image`,

  projects: '/projects',
  project: (projectId: number) => `/projects/${projectId}`,
  projectLikes: (projectId: number) => `/projects/${projectId}/likes`,
}
