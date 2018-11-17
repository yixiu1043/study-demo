import axios from "axios"
import store from "@/vuex"
import { getToken } from "@/utils/auth"

// 创建axios实例
const service = axios.create({
    baseURL: "http://localhost:3000", // api 的 base_url
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['X-Token'] = getToken();
        }
        return config
    },
    error => {
        console.log(error)
        Promise.reject(error)
    }
)

// 相应拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code !== 200) {
            if (res.code === 500) {

            } else if (res.code === 5002) {

            }
        } else {
            return response.data || response.data.data
        }
    },
    error => {
        console.log('err' + error)
        // alert("错误提示")
        return Promise.reject(error);
    }
)

export default service


