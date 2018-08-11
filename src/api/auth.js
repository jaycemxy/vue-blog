import request from '@/helpers/request'

const URL = {   // 与后端约定的接口
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  GET_INFO: '/auth'
}

export default {
  register({ username,password }) {
    return request(URL.REGISTER, 'POST', { username, password })
  },

  login({ username, password }) {
    return request(URL.LOGIN, 'POST', { username, password })
  },

  logout() {
    return request(URL.LOGOUT)
  },

  getInfo() {
    return request(URL.GET_INFO)
  }
}
