import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/user',
    method: 'get',
    response: ({ query }) => {
      return {
        success: true,
        data: {
          id: query.id,
          name: 'wyb'
        }
      }
    }
  }
]
