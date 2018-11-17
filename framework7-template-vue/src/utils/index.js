import md5 from 'crypto-md5'

// md5加密
export function md5Fun(key) {
  return md5(key, 'hex')
}
