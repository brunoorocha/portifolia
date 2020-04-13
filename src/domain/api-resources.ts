
export const DribbbreApiResources = {
  auth: '/auth',
  createUser: '/users',
  profile: (id: number) => `/users/${id}`
}
