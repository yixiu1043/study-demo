import request from '@/utils/request'

export function loginByPhone(query) {
  return request({
    url: '/login/cellphone',
    method: 'get',
    params: {
      query
    }
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: {
      token
    }
  })
}
