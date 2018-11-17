import request from '@/utils/request'

/**
 * 获取轮播
 * @param type : 1: mv 4: 电台 5: 视频
 */
export function fetchBanner(query) {
  return request({
    url: '/banner',
    method: 'get',
    params: {
      query
    }
  })
}

export function fetchPersonalNewsong(query) { // 推荐歌单
  return request({
    url: '/personalized/newsong',
    method: 'get',
    params: {
      query
    }
  })
}

export function fetchRecommendResource(query) { // 获取每日推荐歌单
  return request({
    url: '/recommend/resource',
    method: 'get',
    params: {
      query
    }
  })
}

export function fetchPersonalized(query) { // 推荐歌单
  return request({
    url: '/personalized',
    method: 'get',
    params: {
      query
    }
  })
}

export function fetchPersonalizedDjprogram(query) { // 推荐主播电台
  return request({
    url: '/personalized/djprogram',
    method: 'get',
    params: {
      query
    }
  })
}
