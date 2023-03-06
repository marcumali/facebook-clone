import axios from 'axios'
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()
const baseURL = serverRuntimeConfig.API_BASEURI + '/api'

export async function getToken(data: any) {
  return axios.post(baseURL + '/auth/token', data)
    .then(res => res.data)
}

export async function getUser(access_token: string, params = {}) {
  return axios.get(baseURL + '/user/me', {
    params,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`,
    },
  })
    .then(res => res.data)
}
