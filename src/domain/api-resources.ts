
export const DribbbreApiResources = {
  auth: '/auth',
  createUser: '/users',
  profile: (userId: number) => `/users/${userId}`,

  projects: '/projects',
  project: (projectId: number) => `/projects/${projectId}`,
  projectLikes: (projectId: number) => `/projects/${projectId}/likes`,
}
