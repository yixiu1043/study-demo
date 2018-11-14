// 集中管理路由，所有的接口地址：
//  1.整个应用用到了哪些接口一目了然
//  2.接口地址可能变化，方便管理
const prefix = '' // api地址前缀
export default (config => {
    console.log("1>>>>>>>>>>>>>>处理接口地址");
    console.log(config);
    return Object.keys(config).reduce((copy, name) => {
        copy[name] = `${prefix}${config[name]}`
        return copy
    }, {})
})({
    //api
    fetchBanner: "/banner",//获取轮播 type: 1: mv 4: 电台 5: 视频
    fetchPersonalNewsong: "/personalized/newsong",//推荐歌单（需要登陆）
    fetchRecommendResource: "/recommend/resource",//获取每日推荐歌单
    fetchPersonalized: "/personalized",//推荐歌单
    fetchPersonalizedDjprogram: "/personalized/djprogram"//推荐主播电台
})