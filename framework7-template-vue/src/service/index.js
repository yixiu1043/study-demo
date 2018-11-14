import http from "../http"
import api from "../api"

export function fetchPersonalNewsong(params = {}) {// 从外部接受参数，没有参数默认为空对象
    return http.get(api.fetchPersonalNewsong, params)// return对应的get/post方法，第一个填路径，第二个给参数对象
}
export function fetchBanner(params = {}) {
    console.log("2>>>>>>>>>>>>>>开始请求")
    return http.get(api.fetchBanner, params)
}
export function fetchRecommendResource(params = {}) {
    return http.get(api.fetchRecommendResource, params)
}
export function fetchPersonalized(params = {}) {
    return http.get(api.fetchPersonalized, params)
}
export function fetchPersonalizedDjprogram(params = {}) {
    return http.get(api.fetchPersonalizedDjprogram, params)
}