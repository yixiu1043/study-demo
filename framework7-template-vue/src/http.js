import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
// 配置允许跨域携带cookie
axios.defaults.withCredentials = true;
// 配置超时时间
axios.defaults.timeout = 100000;
// 标识这是一个 ajax 请求
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

// token
// let token = "super-yixiu"
// localStorage.setItem("token", token);
// let AUTH_TOKEN = localStorage.getItem("token");
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// 配置请求拦截
axios.interceptors.request.use(config => {
    console.log("3>>>>>>>>>>>>>>请求拦截")
    console.log(config);
    return config
})

//  配置响应拦截
axios.interceptors.response.use(response => {
    console.log("4>>>>>>>>>>>>>>响应拦截")
    console.log(response)
    // 在这里你可以判断后台返回数据携带的请求码
    if (response.data.code === 200 || response.data.code === '200') {
        return response.data.data || response.data
    } else {
        // 非200请求抱错
        throw Error(response.data.msg || '服务异常')
    }
})

export default axios;
