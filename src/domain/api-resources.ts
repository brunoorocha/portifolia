
export const DribbbreApiResources = {
  auth: '/auth',
  createUser: '/users',
  profile: (userIdOrUsername: number | string) => `/users/${userIdOrUsername}`,

  projects: '/projects',
  project: (projectId: number) => `/projects/${projectId}`,
  projectLikes: (projectId: number) => `/projects/${projectId}/likes`,
}
