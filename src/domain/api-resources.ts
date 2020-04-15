
export const DribbbreApiResources = {
  auth: '/auth',
  createUser: '/users',
  profile: (userId: number) => `/users/${userId}`,

  projects: '/projects',
  projectLikes: (projectId: number) => `/projects/${projectId}/likes`,
}
